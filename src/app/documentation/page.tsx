'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Mic,
  Bot,
  TerminalSquare
} from 'lucide-react';
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

        {/* Welcome Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
              <Sparkles className="text-blue-500" /> Welcome to Your AI Assistant!
            </h2>
            <p className="text-gray-300">
              🚀 This is a <span className="text-yellow-400 font-semibold">beta test version</span> of a voice-driven AI assistant designed for tech enthusiasts.
            </p>
            <p className="text-gray-300">
              🗣️ Click the red mic button and say something like <span className="italic text-white">{"What’s the time?"}</span> to begin chatting.
            </p>
            <p className="text-gray-300">
              📌 This assistant is built for intelligent interaction — not entertainment — and will keep evolving.
            </p>
            <p className="text-gray-300">
              📰 Soon, you’ll receive personalized updates about <span className="text-white font-medium">tech, science, news, and more</span>.
            </p>
            <p className="text-gray-300">
              🧪 It’s a fun, open-source project with a bold goal: to become one of the <span className="text-blue-400 font-bold">most powerful AI assistant apps</span> available.
            </p>
          </CardContent>
        </Card>

        {/* Voice Commands Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
              <Mic className="text-green-400" /> Example Voice Commands
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>🕐 {"What is the time?"}</li>
              <li>🔍 {"Tell me about Sundar Pichai."}</li>
              <li>🎵 {"Play Believer on YouTube"}</li>
              <li>📲 {"Open Instagram"}</li>
              <li>📩 {"Open YouTube"}</li>
              <li>🧠 {"Who are you?"} or {"What can you do?"}</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
              <Bot className="text-yellow-400" /> Behind the Scenes
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>🧩 Built with <span className="text-white font-medium">Next.js + TypeScript</span></li>
              <li>🎨 UI: <span className="text-white font-medium">Tailwind CSS + MUI</span></li>
              <li>🎤 Speech-to-Text: Browser Web Speech API (fallback: Vosk)</li>
              <li>🤖 AI: <span className="text-white font-medium">Mistral / Gemini</span> via FastAPI</li>
              <li>🧠 Memory: Short-term (MongoDB support coming soon)</li>
              <li>🔊 Voice Output: <span className="text-white font-medium">Coqui TTS</span> (offline & open source)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Developer Notes Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
              <TerminalSquare className="text-red-400" /> Developer Notes
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>⚠️ Currently in <span className="text-yellow-400">beta</span>. Expect bugs & constant improvements.</li>
              <li>🛠️ Frequent updates will enhance speed, accuracy, and intelligence.</li>
              <li>🎙️ Voice-only interaction is experimental — and evolving fast!</li>
              <li>🤝 Contributions & feedback are welcome before public launch 🚀</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg px-6 py-2 rounded-xl shadow-lg transition duration-300">
            Start Using the Assistant
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
