import React, { useContext, useCallback } from 'react';
import quoteContent from '../contexts/quoteContext';
import { useHistory } from 'react-router-dom';

function Quote({ match }) {
  const [quoteList] = useContext(quoteContent);
  const history = useHistory();

  let index = Math.floor(Math.random() * quoteList.length) + 1;
  let quote = quoteList[index - 1];

  if (match.params.id) {
    index = +match.params.id;
    const q = quoteList.find((f) => f.id === index);
    if (q) quote = q;
  }

  // totally stupid, used only for test:
  const handleChangeQuote = useCallback(
    (toGo, index, length) => {
      switch (toGo) {
        case 'random':
          history.push('/quote');
          break;
        case 'next':
          console.log(toGo, index, length);
          const numberNext = index >= length ? 1 : index + 1;
          history.push(`/quote/${numberNext}`);
          break;
        case 'prev':
          console.log(toGo, index, length);
          const numberPrev = index <= 1 ? length : index - 1;
          history.push(`/quote/${numberPrev}`);
          break;
        default:
          history.push('/quote');
          break;
      }
    },
    [history]
  );

  return (
    <article>
      <h1>
        Quote (id: {quote.id}) (index: {index})
      </h1>

      <blockquote>
        <p>{quote.text}</p>
        <footer>{quote.author}</footer>
      </blockquote>

      <button
        onClick={() => handleChangeQuote('prev', index, quoteList.length)}
      >
        Previous Quote
      </button>
      <button onClick={() => handleChangeQuote('random')}>Random Quote</button>
      <button
        onClick={() => handleChangeQuote('next', index, quoteList.length)}
      >
        Next Quote
      </button>

      <pre>{JSON.stringify(match, null, 2)}</pre>
    </article>
  );
}

export default Quote;
