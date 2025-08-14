import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, LinearProgress, Typography } from '@mui/material';
import styled from 'styled-components';
import { sendChat } from 'services/openAiService';
import { nanoid } from '@reduxjs/toolkit';
import systemPrompt from 'constants/systemPrompt';
import ChatMessage from 'components/ChatMessage/ChatMessage';
import InputBox from 'components/InputBox/InputBox';
import { Message } from 'types/chat';
import parseTaggedContent from 'utils/response.utils';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      type: 'text',
      content: input,
    };

    const currentHistory = [
      ...messages
        .filter((m) => typeof m.content === 'string')
        .map((m) => ({
          role: m.role === 'bot' ? 'assistant' : m.role,
          content: m.content as string,
        })),
      { role: 'user', content: input },
    ] as { role: 'system' | 'user' | 'assistant'; content: string }[];

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await sendChat(systemPrompt, currentHistory);
      const parsed = parseTaggedContent(reply);

      const botMessage: Message = {
        id: nanoid(),
        role: 'bot',
        type: 'text',
        content: parsed,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatWrapper>
      <Typography variant="h6">AI Chat</Typography>

      <MessagesArea>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesArea>

      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      <InputContainer>
        <InputBox value={input} onChange={setInput} onSend={handleSend} />
      </InputContainer>
    </ChatWrapper>
  );
};

export default Chat;

const ChatWrapper = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

const MessagesArea = styled(Box)`
  flex: 1;
  overflow-y: auto;
`;

const InputContainer = styled(Box)`
  padding: 8px 16px;
  background-color: #fff;
`;
