import quotes from '../data/quotes.json';

export function getRandomQuote(language = 'en') {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  const quoteInLang = selectedQuote[language] || selectedQuote['en'];

  return {
    id: selectedQuote.id,
    text: quoteInLang.text,
    author: quoteInLang.author
  };
}
