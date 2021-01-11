import React, { useState, useEffect } from 'react';

function Clicker() {
  const [value, setValue] = useState(0);

  // on create
  useEffect(() => {
    console.log('on create - empty array - start');

    // on destroy
    return () => {
      console.log('on create - empty array -  cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('on [value] change - start');
    return () => {
      console.log('on [value] change - cleanup');
    };
  }, [value]);

  useEffect(() => {
    console.log('on no array - start');
    return () => {
      console.log('on no array - cleanup');
    };
  });

  return (
    <div>
      <h2>Clicker</h2>

      <p>value: {value}</p>
      <button
        onClick={() => {
          console.log('------------------------------');
          setValue(value + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default Clicker;
