'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { Card, CardContent } from '@/components/ui/card';

import { Sparkles, Mic, Bot, TerminalSquare } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  text: string;
};


type SpeechRecognitionEventType = SpeechRecognitionEvent;

interface ExtendedSpeechRecognition extends SpeechRecognition {
  maxAlternatives: number;
}

const cleanTextForVoice = (text: string): string => {
  const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g;
  text = text.replace(emojiRegex, '');
  text = text.replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1');
  text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
};

const AIPage: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.user?.username);
  const [messages, setMessages] = useState<Message[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  const handleFrontendCommands = useCallback((text: string): string | null => {
    const lower = text.toLowerCase();
  
    if (lower.includes('scroll down')) {
      window.scrollBy({ top: 300, behavior: 'smooth' });
      return 'Scrolling down the page.';
    }
  
    if (lower.includes('scroll up')) {
      window.scrollBy({ top: -300, behavior: 'smooth' });
      return 'Scrolling up the page.';
    }
  
    if (lower.includes('go to') && lower.includes('about')) {
      window.location.href = '/about';
      return 'Opening the About page.';
    }
  
    if (lower.includes('go to') && lower.includes('documentation')) {
      window.location.href = '/documentation';
      return 'Opening the Documentation page.';
    }
  
    if (lower.includes('reload') || lower.includes('refresh')) {
      window.location.reload();
      return 'Reloading the page.';
    }
  
    if (lower.includes('open instagram')) {
      window.open('https://www.instagram.com', '_blank');
      return 'Opening Instagram in a new tab.';
    }
  
    if (lower.includes('tell me the time') || lower.includes("what's the time")) {
      const now = new Date();
      return `The current time is ${now.toLocaleTimeString()}`;
    }
  
    if (lower.includes('create calendar event')) {
      return 'Calendar event creation is under development.';
    }
  
    return null;
  }, []);
  

  const handleMusicSearchCommand = useCallback((text: string): boolean => {
    const match = text.match(/play (.+?) (on youtube|on spotify)?/i);
    if (match) {
      const songName = match[1].trim();
      const platform = match[2]?.toLowerCase();

      const onDone = () => startListening();

      if (platform?.includes('spotify')) {
        const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(songName)}`;
        const newTab = window.open(spotifyUrl, '_blank');
        if (!newTab) alert('Popup blocked! Please allow popups.');
        speakText(`Opening ${songName} on Spotify`, onDone);
      } else {
        const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(songName)}`;
        const newTab = window.open(youtubeUrl, '_blank');
        if (!newTab) alert('Popup blocked! Please allow popups.');
        speakText(`Searching ${songName} on YouTube`, onDone);
      }
      return true;
    }
    return false;
  }, []);

  const speakText = useCallback((text: string, onDone?: () => void) => {
    const clean = cleanTextForVoice(text);
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'en-US';
    window.speechSynthesis.cancel();
    utterance.onend = () => {
      if (onDone) onDone();
    };
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, []);
  

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


    if (!SpeechRecognition) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition() as ExtendedSpeechRecognition;
    recognitionRef.current = recognition;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setIsListening(true);

    recognition.onresult = async (event: SpeechRecognitionEventType) => {
      setIsListening(false);
      const userText = event.results[0][0].transcript;
      setMessages((prev) => [...prev, { role: 'user', text: userText }]);

      if (handleMusicSearchCommand(userText)) return;

      const frontendResponse = handleFrontendCommands(userText);
      if (frontendResponse) {
        setMessages((prev) => [...prev, { role: 'assistant', text: frontendResponse }]);
        speakText(frontendResponse, () => startListening());
        return;
      }

      try {
        setTyping(true);
        const res = await fetch('https://fastapi-4omq.onrender.com/process', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: userText }),
        });
        const data: { response: string } = await res.json();
        const responseText = data.response;
        setTyping(false);
        setMessages((prev) => [...prev, { role: 'assistant', text: responseText }]);
        speakText(responseText, () => startListening());
      } catch (error) {
        console.error('Error:', error);
        const fallback = "Sorry, I couldn't process your request.";
        setTyping(false);
        setMessages((prev) => [...prev, { role: 'assistant', text: fallback }]);
        speakText(fallback, () => startListening());
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Recognition error:', event.error);
      setIsListening(false);
    };

    recognition.start();
  }, [handleFrontendCommands, handleMusicSearchCommand]);

  useEffect(() => {
    const welcome = `Hello ${username}, how can I help you?`;
    speakText(welcome, () => {});
    setMessages((prev) => [...prev, { role: 'assistant', text: welcome }]);
  }, [username]);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    startListening();
  };

  return (
    <>
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <div className="p-4 text-center text-3xl font-semibold">👋 Welcome, {username}!</div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-sm px-4 py-2 rounded-2xl shadow-md ${
              msg.role === 'user'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 self-end text-right ml-auto'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 self-start text-left mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {typing && (
          <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl max-w-xs shadow-md self-start animate-pulse">
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="sticky bottom-0 p-4 bg-gray-900 border-t border-gray-800">
        <div className="flex justify-center items-center">
          <div className="relative">
            {!isSpeaking && (
              <Button
                variant="contained"
                color="primary"
                startIcon={<MicIcon />}
                onClick={startListening}
                className="rounded-full w-16 h-16 shadow-lg"
              />
            )}
            {isSpeaking && (
              <Button
                variant="contained"
                color="error"
                startIcon={<StopIcon />}
                onClick={stopSpeaking}
                className="rounded-full w-16 h-16 shadow-lg"
              />
            )}
            {isListening && (
              <span className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500 opacity-50 rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2 z-[-1]" />
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
  <div className="max-w-4xl mx-auto space-y-10">
    <header className="text-center">
      <h1 className="text-4xl font-bold text-blue-400">AI Assistant Documentation</h1>
      <p className="mt-2 text-gray-300 italic">Version: Beta 0.1 — Pre-Release Test Mode</p>
    </header>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <Sparkles className="text-blue-500" /> Welcome to Your AI Assistant!
        </h2>
        <p className="text-gray-300">
          🚀 This is a <span className="text-yellow-400 font-semibold">beta test model</span> of a fun, voice-driven AI assistant. It's designed for tech enthusiasts who want to explore the future of conversational AI.
        </p>
        <p className="text-gray-300">
          🗣️ Just click the red button and say something like:{" "}
          <span className="italic text-white">"What’s the time?"</span> — and start chatting!
        </p>
        <p className="text-gray-300">
          📌 This app isn’t built for entertainment. It’s focused on being an informative and intelligent assistant — with features that are continually improving.
        </p>
        <p className="text-gray-300">
          📰 Soon, you’ll be able to get personalized updates about{" "}
          <span className="text-white font-medium">tech, science, news, and more</span> directly from this assistant.
        </p>
        <p className="text-gray-300">
          🧪 This is a generic open-source project made just for fun, but we’re aiming to make it the{" "}
          <span className="text-blue-400 font-bold">best AI-based assistant app out there</span>!
        </p>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <Mic className="text-green-400" /> Example Voice Commands
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>🕐 "What is the time?"</li>
          <li>🔍 "Tell me About about Sundar Pichai."</li>
          <li>🎵 "Play beliver on youtub"</li>
          <li>📲 "Open Instagram."</li>
          <li>📩 "open youtub"</li>
          <li>🧠 "Who are you?" or "What can you do?"</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <Bot className="text-yellow-400" /> Behind the Scenes
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>🧩 Built with <span className="text-white font-medium">Next.js + TypeScript</span></li>
          <li>🎨 UI powered by <span className="text-white font-medium">Tailwind CSS + MUI</span></li>
          <li>🎤 Speech-to-Text via browser API (Vosk as fallback)</li>
          <li>🤖 AI via <span className="text-white font-medium">Mistral / Gemini</span> (FastAPI backend)</li>
          <li>🧵 Memory support (Short-term; MongoDB in future updates)</li>
          <li>🔊 Text-to-Speech via Coqui (offline, free)</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <TerminalSquare className="text-red-400" /> Developer Notes
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>⚠️ Currently in <span className="text-yellow-400">beta mode</span>. Expect changes and occasional bugs.</li>
          <li>🛠️ Frequent updates aim to improve speed, reliability, and accuracy.</li>
          <li>🧪 Voice-only interaction is still experimental but improving rapidly.</li>
          <li>🤝 Contributions and feedback are welcome before the public release!</li>
        </ul>
      </CardContent>
    </Card>

    <div className="text-center">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-xl">
        Start Using the Assistant
      </Button>
    </div>
  </div>
</div>

    </>
  );
};

export default AIPage;