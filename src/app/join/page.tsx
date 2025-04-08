'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail, Sparkles, UserPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
export default function JoinPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-purple-400">Be a Part of This Journey</h1>
          <p className="mt-2 text-gray-300 italic">Contribute. Collaborate. Innovate.</p>
        </header>

        {/* Why Contribute Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <UserPlus className="text-green-400" /> Why Contribute?
            </h2>
            <p className="text-gray-300">
              This project is more than just code — it{"’"}s a movement toward creating a fully open-source, voice-based AI assistant.
              If you{"’"}re excited about AI, speech recognition, or full-stack web development, your help is not just welcome — it{"’"}s needed!
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>🚀 Enhance the assistant’s capabilities</li>
              <li>🧠 Improve memory and natural conversations</li>
              <li>🎤 Make voice recognition smarter</li>
              <li>🌐 Add multi-language support</li>
              <li>🛡️ Strengthen privacy & security</li>
            </ul>
          </CardContent>
        </Card>

        {/* GitHub Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <Github className="text-blue-400" /> Contribute on GitHub
            </h2>
            <p className="text-gray-300">
              Check out the codebase, create an issue, submit a PR, or just star the repo if you like the vision.
            </p>
            <a
              href="https://github.com/NityamMishra1234/ai-next.js"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <Github /> Visit My GitHub Profile Next.js for handling the full stack
            </a>
            <a
              href="https://github.com/NityamMishra1234/fastAPI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <Github /> Visit My GitHub Profile for handling the AI
            </a>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gray-900 border border-gray-800 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <Mail className="text-yellow-300" /> Reach Out Directly
            </h2>
            <p className="text-gray-300">
              Got ideas or want to collaborate personally? Let{"’"}s talk! Feel free to open an issue on GitHub or reach out via email.
            </p>
            <p className="text-gray-300">
              📫 Email: <span className="text-white">nityam1111@gmail.com</span>
            </p>
          </CardContent>
        </Card>

        {/* Closing Note */}
        <Card className="bg-gray-900 border border-gray-800 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-purple-300 flex items-center gap-2">
              <Sparkles className="text-pink-400" /> Let{"’"}s Build the Future Together
            </h2>
            <p className="text-gray-300">
              The more minds behind this project, the better. Whether you{"’"}re a beginner or expert, there{"’"}s something for you to improve or create. Let{"’"}s make AI more open, more useful, and more fun.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
