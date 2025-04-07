// components/TTSPlayer.tsx

import { fetchTTS } from "@/utils/tts";

export default function TTSPlayer() {
  const handleSpeak = async () => {
    try {
      const audioBlob = await fetchTTS("What is Gen AI?");
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (err) {
      console.error("Error fetching TTS:", err);
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Speak
    </button>
  );
}
