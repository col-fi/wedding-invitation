import { useState } from 'react';
import styled from 'styled-components';

const GuestbookContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const MessageContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  date: string;
}

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage: GuestbookMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('ko-KR'),
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <GuestbookContainer>
      <Title>방명록</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextArea
          placeholder="축하 메시지를 남겨주세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">메시지 남기기</Button>
      </Form>
      <MessageList>
        {messages.map((msg) => (
          <Message key={msg.id}>
            <MessageHeader>
              <span>{msg.name}</span>
              <span>{msg.date}</span>
            </MessageHeader>
            <MessageContent>{msg.message}</MessageContent>
          </Message>
        ))}
      </MessageList>
    </GuestbookContainer>
  );
};

export default Guestbook; 