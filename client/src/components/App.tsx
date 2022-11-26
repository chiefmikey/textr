import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const mainState = useSelector((state) => state);
  return <></>;
};

export default App;
