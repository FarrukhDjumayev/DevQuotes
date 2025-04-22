import { useState, useEffect } from 'react';
import { getRandomQuote } from '../utils/getRandomQuote';

export default function useQuotes(lang = 'en') {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const newQuote = getRandomQuote(lang);
    setQuote(newQuote);
  }, [lang]);

  const getNextQuote = () => {
    const newQuote = getRandomQuote(lang);
    setQuote(newQuote);
  };

  return { quote, getNextQuote };
}
