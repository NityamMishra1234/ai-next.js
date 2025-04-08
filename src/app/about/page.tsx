'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Hammer, Terminal, User } from 'lucide-react';
import { LinkedIn } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
  <div className="max-w-3xl mx-auto space-y-10">
    <header className="text-center">
      <h1 className="text-4xl font-bold text-blue-400">About This Project</h1>
      <p className="mt-2 text-gray-300 italic">
        Meet the creator and explore the tech behind the assistant
      </p>
    </header>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <Hammer className="text-green-400" /> How This App Was Built
        </h2>
        <p className="text-gray-300">
          This AI-powered voice assistant is a fully open-source project made with love and innovation:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>🧠 <span className="text-white font-medium">Frontend:</span> Next.js (App Router) + TypeScript</li>
          <li>🎨 <span className="text-white font-medium">UI:</span> Tailwind CSS + MUI + Lucide Icons</li>
          <li>🎤 <span className="text-white font-medium">Speech-to-Text:</span> Browser&apos;s Web Speech API</li>
          <li>🧠 <span className="text-white font-medium">AI Model:</span> Mistral or Gemini via FastAPI backend</li>
          <li>🗂️ <span className="text-white font-medium">Memory:</span> Conversation buffer with future support for MongoDB</li>
          <li>🔊 <span className="text-white font-medium">TTS:</span> Coqui-AI (Offline, Open Source)</li>
          <li>🚀 <span className="text-white font-medium">Hosting:</span> Built for deployment on Vercel</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <User className="text-yellow-300" /> About the Creator
        </h2>
        <p className="text-gray-300">
          Hi! I&apos;m <span className="font-semibold text-white">Nityam Mishra</span>, a passionate developer exploring AI and full-stack web development.
          This project is my playground to experiment with cutting-edge open-source technologies and voice-based interaction.
        </p>
        <p className="text-gray-300">
          This app is not for entertainment but for experimentation and learning. It&apos;s currently in <span className="text-yellow-400">beta testing</span>, and I plan to grow it into a smart, personalized AI assistant.
        </p>
        <a
          href="https://github.com/NityamMishra1234/ai-next.js"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-blue-400 hover:underline"
        >
          <Github /> Follow me on GitHub
        </a>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border border-gray-800 shadow-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center gap-2">
          <Terminal className="text-red-400" /> Project Status
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>⚠️ This is a pre-release build made for testing only</li>
          <li>🛠️ Continuous improvements and new features are on the way</li>
          <li>
            📣 Feedback and collaboration are open
            <a
              href="https://www.linkedin.com/in/nityam-mishra-043295290/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ml-1 text-blue-400 hover:underline"
            >
              <LinkedIn /> Reach me out!
            </a>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
</div>

    </>
  );
};

export default AboutPage;
