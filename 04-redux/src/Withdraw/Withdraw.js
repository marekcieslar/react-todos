import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Withdraw() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const [value, setValue] = useState(5);

  const handleOnWithdraw = () => {
    dispatch({
      type: 'WITHDRAW',
      payload: value,
    });
  };

  return (
    <section>
      <h2>Withdraw</h2>
      <h3>balance: {balance}</h3>
      <label htmlFor="withdraw">withdraw value</label>
      <input
        type="number"
        id="withdraw"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <button onClick={handleOnWithdraw}>Withdraw</button>
    </section>
  );
}

export default Withdraw;
