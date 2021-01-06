import React, { useState, useContext, useRef, useEffect } from 'react';
import quoteContext from '../contexts/quoteContext';

function QuoteForm() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const [quoteList, setQuoteList] = useContext(quoteContext);

  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() && author.trim()) {
      const newQuote = {
        text,
        author,
        id: quoteList.length + 1,
      };
      setQuoteList([...quoteList, newQuote]);
      setText('');
      setAuthor('');
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">text: </label>
        <input
          ref={textRef}
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">author: </label>
        <input
          type="author"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <input type="submit" value="add author" />
    </form>
  );
}

export default QuoteForm;
