'use client';

import { useEffect, useState } from 'react';

export default function Typewriter({ text = '', speed = 40 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    
    const formattedText = text; 

    setDisplayedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      setDisplayedText(prev => prev + formattedText.charAt(i));
      i++;
      if (i >= formattedText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      "{displayedText}"
    </span>
  );
}
