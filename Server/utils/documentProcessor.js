import fetch from 'node-fetch';

async function processDocument(content, onPartialResult, onComplete) {
  const chunks = chunkText(content, 200); // Process 200 characters at a time
  let processedChunks = 0;

  for (const chunk of chunks) {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Create a quiz question from this content: ${chunk}`,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        onPartialResult(result.text || 'No result text');
        processedChunks++;
      } else if (response.status === 429) {
        console.warn("Rate limit hit. Stopping further requests.");
        break; // Stop processing further chunks when rate limit is hit
      } else {
        console.error(`Error fetching document chunk: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error processing document chunk:", error);
    }
  }

  onComplete(`Processed ${processedChunks} chunks.`);
}

function chunkText(text, size) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

export { processDocument };
