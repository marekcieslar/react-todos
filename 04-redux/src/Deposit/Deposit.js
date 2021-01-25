import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Deposit() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const [value, setValue] = useState(5);

  const handleOnDeposit = () => {
    console.log('handleOnDeposit');
    dispatch({
      type: 'DEPOSIT',
      payload: value,
    });
  };

  return (
    <section>
      <h2>Deposit</h2>
      <h3>balance: {balance}</h3>
      <label htmlFor="deposit">deposit value: </label>
      <input
        type="number"
        id="deposit"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <button onClick={handleOnDeposit}>Deposit</button>
    </section>
  );
}

export default Deposit;
