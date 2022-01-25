import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';
function App() {
  const initialState=useSelector((state)=> state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
   

     <section className="container">
       <p className="title">Counter with Redux</p>

       <div className="body">
         <button onClick={()=> dispatch(decrement()) }>-</button>
         <input type="text" value={initialState} readOnly />
         <button onClick={()=>dispatch(increment())}>+</button>
       </div>
     </section>
    </div>
  );
}

export default App;
