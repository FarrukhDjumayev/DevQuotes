'use client';

import { Sparkles, ClipboardCopy, Check } from 'lucide-react';
import Typewriter from './Typewriter';
import useQuotes from '@/app/hooks/useQuotes';
import { useLanguage } from './LanguageContext';
import { useState } from 'react';

export default function QuoteBox() {
  const { language } = useLanguage();
  const { quote, getNextQuote } = useQuotes(language);
  const [copied, setCopied] = useState(false);
  const devIcon = "</>"

  if (!quote) {
    return (
      <div className="bg-gray-900 p-6 rounded-xl shadow-md max-w-xl w-full animate-pulse border border-gray-700">
        <p className="h-6 bg-gray-700 rounded w-3/4 mb-2"></p>
        <p className="h-4 bg-gray-700 rounded w-1/3"></p>
      </div>
    );
  }

  const handleCopy = async () => {
    const quoteText = `"${quote.text}" – ${quote.author}`;
    try {
      await navigator.clipboard.writeText(quoteText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/30 
                 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl shadow-lg max-w-xl w-full 
                 border-2 border-green-600 hover:shadow-2xl transition-shadow duration-300 group"
    >
      
      <button
        onClick={handleCopy}
        aria-label="Copy quote"
        className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center 
                   rounded-lg border border-green-400 text-green-300 hover:bg-green-600/10 
                   transition-colors duration-200"
      >
        {copied ? (
          <Check
            size={20}
            className="text-green-400 animate-bounce"
          />
        ) : (
          <ClipboardCopy size={20} />
        )}
      </button>

      
      <p className="text-lg sm:text-xl mt-5 text-green-100 font-medium leading-relaxed tracking-wide">
        {quote.text ? <Typewriter text={`"${quote.text}"`} /> : `"Dev quote here"`}
      </p>

      
      <p className="mt-4 text-sm text-green-400 italic text-right">
        – {quote.author || "Unknown"}
      </p>

      
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={getNextQuote}
          className="px-4 py-2 rounded-lg border border-green-400 text-green-300 
                     hover:bg-green-600/10 transition-colors duration-200"
        >
          {language === 'uz' ? 'Keyingi' : language === 'ru' ? 'Следующая' : 'Next Quote'}
        </button>

        <p className='text-green-400 group-hover:rotate-12 transition-transform duration-300'>
          {devIcon}
        </p>
      </div>
    </div>
  );
}
