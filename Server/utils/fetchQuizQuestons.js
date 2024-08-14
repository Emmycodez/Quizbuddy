import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function fetchQuizQuestions(prompt) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: prompt }
      ],
      model: "gpt-3.5-turbo",
    });

    const quizData = response.choices[0].message.content;
    return quizData;
  } catch (error) {
    if (error.response) {
      const { headers } = error.response;
      console.error('Rate Limit Info:', {
        limitRequests: headers['x-ratelimit-limit-requests'],
        remainingRequests: headers['x-ratelimit-remaining-requests'],
        limitTokens: headers['x-ratelimit-limit-tokens'],
        remainingTokens: headers['x-ratelimit-remaining-tokens'],
        resetRequests: headers['x-ratelimit-reset-requests'],
        resetTokens: headers['x-ratelimit-reset-tokens'],
      });
    }
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
}
