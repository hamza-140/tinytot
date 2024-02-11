import {useContext, useEffect} from 'react';
import {Context} from '../context/AuthContext';
const Checker = () => {
  const {tryLocalSignIn} = useContext(Context);

  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default Checker;
