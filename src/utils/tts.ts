// utils/tts.ts

export async function fetchTTS(prompt: string): Promise<Blob> {
    const res = await fetch("http://localhost:8000/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    if (!res.ok) throw new Error("TTS request failed");
  
    // Expecting the response to return the audio file directly
    const blob = await res.blob();
    return blob;
  }
  