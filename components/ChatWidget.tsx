
import React, { useState, useRef, useEffect } from 'react';
import { askResumeAssistant } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const q = input;
    setInput('');
    setMessages(prev => [...prev, { text: q, sender: 'user' }]);
    setIsLoading(true);
    const ans = await askResumeAssistant(q);
    setMessages(prev => [...prev, { text: ans, sender: 'ai' }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isOpen ? 'h-full bg-[#020617]/98 backdrop-blur-3xl' : 'h-16'}`}>
      <div className="max-w-4xl mx-auto h-full flex flex-col px-6">
        
        {/* Simplified Toggle Bar */}
        <div className="h-16 flex items-center justify-between border-t border-white/5">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">
            Assistant Interface
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-blue-500 text-slate-400 transition-colors"
          >
            {isOpen ? '[ Shutdown ]' : '[ Ask Question ]'}
          </button>
        </div>

        {/* Chat Area */}
        {isOpen && (
          <div className="flex-1 flex flex-col py-12 animate-slide-up overflow-hidden">
            <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-12 no-scrollbar pb-32">
              {messages.length === 0 && (
                <div className="text-center py-20 opacity-20">
                  <p className="text-5xl font-black tracking-tighter italic">"Ask about the 2025 stack..."</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xl text-xl leading-relaxed ${m.sender === 'user' ? 'text-white font-bold' : 'text-slate-400 font-medium'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="text-blue-500 italic animate-pulse mono text-[10px] uppercase tracking-widest">Processing Data...</div>
                </div>
              )}
            </div>

            {/* Large Input Field */}
            <div className="absolute bottom-24 left-6 right-6 max-w-4xl mx-auto">
              <input
                autoFocus
                type="text"
                placeholder="Type your query..."
                className="w-full bg-transparent border-b border-white/10 py-6 text-4xl font-bold tracking-tighter focus:outline-none focus:border-blue-500 placeholder:text-white/5 transition-all"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
