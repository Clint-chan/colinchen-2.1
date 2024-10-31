import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamingResponse, setStreamingResponse] = useState(''); // 新增这行
  const messagesEndRef = useRef<HTMLDivElement>(null);

  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const cleanup = () => {
      setStreamingResponse('');
      setIsLoading(false);
    };

    return cleanup;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);
    setStreamingResponse('');

    try {
      const response = await fetch('https://chat-api.newestgpt.com', { // 替换为你的 Worker URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a friendly assistant named 陈定钢, who is an AI model development engineer.' },
            ...messages,
            userMessage
          ],
          stream: true
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.response) {
                  fullResponse += data.response;
                  setStreamingResponse(fullResponse);
                }
              } catch (e) {
                console.error('Error parsing SSE data:', e);
              }
            }
          }
        }

        setMessages(prev => [...prev, {
          role: 'assistant',
          content: fullResponse
        }]);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : '发生错误，请稍后重试');
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
      setStreamingResponse('');
    }
  };

  

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog">
          <div className="bg-white rounded-2xl w-full max-w-md h-[600px] flex flex-col relative animate-in fade-in duration-200">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">AI 助手</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <p>你好！我是陈定钢，一名AI模型开发工程师。</p>
                  <p className="mt-2">有什么我可以帮你的吗？</p>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {/* 添加流式响应显示 */}
              {isLoading && streamingResponse && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                    {streamingResponse}
                  </div>
                </div>
              )}
              
              {/* 加载提示 */}
              {isLoading && !streamingResponse && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 text-gray-800 animate-pulse">
                    正在思考...
                  </div>
                </div>
              )}
              
              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm">
                    {error}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>


            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="输入您的问题..."
                  className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}