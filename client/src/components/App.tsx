import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [copy, setCopy] = useState('');
  const mainState = useSelector((state) => state);

  useEffect(() => {
    setCopy('TEXTR');
  }, []);

  return (
    <div>
      <h1>{copy}</h1>
    </div>
  );
};

export default App;
