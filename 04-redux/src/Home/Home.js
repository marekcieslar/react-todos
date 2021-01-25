import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const balance = useSelector((state) => state.balance);

  return (
    <section>
      <h2>Home</h2>
      <h3>balance: {balance}</h3>
    </section>
  );
}

export default Home;
