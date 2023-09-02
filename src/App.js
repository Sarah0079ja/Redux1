import { useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'
import './App.css';

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1 className='text-3xl'>{account}</h1>
      <button
        onClick={() => depositMoney(100)}
        className="p-3 border rounded-[10px] text-3xl gap-[30px] text-white bg-orange-500"
      >
        Deposit
      </button>
      <button
        onClick={() => withdrawMoney(500)}
        className="p-3 border rounded-[10px] text-3xl gap-[30px] text-white bg-orange-500"
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
