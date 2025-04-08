'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Mic, Bot, TerminalSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function DocumentationPage() {
  return (
    <>
    <Navbar/>
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
}
