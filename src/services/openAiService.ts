import OpenAI from 'openai';

export type OpenAIRole = 'user' | 'assistant' | 'system';

export interface OpenAIMessage {
  role: OpenAIRole;
  content: string;
}

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export const sendChat = async (
  systemPrompt: string,
  history: OpenAIMessage[],
): Promise<string> => {
  const allMessages: OpenAIMessage[] = [
    { role: 'system', content: systemPrompt },
    ...history,
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: allMessages,
  });

  return response.choices[0]?.message?.content ?? '';
};
