export type Role = 'user' | 'bot';

export type MessageContent =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; title: string }
  | { type: 'link'; href: string; title: string }
  | { type: 'quiz'; question: string; options: string[]; answer: string };

export interface Message {
  id: string;
  role: 'user' | 'bot';
  type: 'text' | 'streaming' | 'images' | 'videos' | 'buttons';
  content: string | MessageContent[];
}
