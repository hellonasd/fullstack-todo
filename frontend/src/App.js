
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { FormAuth } from './components/form/form';
import {actions} from './auth/actions';
import {Spinner} from './components/spinner/Spinner';
import { Cheduler } from './components/cheduler/cheduler'

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(actions.checkAuth())
    }
  }, [])
  
  // if(!state.auth.loading){
  //   return <Spinner />
  // }

  if(!state.auth.isAuth){
    return <FormAuth />
  }else {
    return (
      <div className="App">
        <Cheduler />
        <button className='btn-logout' onClick={() => dispatch(actions.logout())} >Выйти</button>
      </div>
    );
  }
  
}

export default App;
