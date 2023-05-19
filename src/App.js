import { useSelector, useDispatch } from 'react-redux'
import { increaseByDeposit, increaseByInterest, decreaseByWithdraw, decreaseByCharges } from './store/balance';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [userAmount, setUserAmount] = useState([])

  const balance = useSelector((state) => state.balance.value)

  const dispatch = useDispatch()

  const handleDepsit = (e) => {
    e.preventDefault()
    dispatch(increaseByDeposit(Number(userAmount)))
    setUserAmount([])
  }

  const handleWithdraw = (e) => {
    e.preventDefault()
    dispatch(decreaseByWithdraw(Number(userAmount)))
    setUserAmount([])
  }

  return (
    <div>
      <NavBar/>
        <div className='container'>
          <div className="header">
            <div className='header-top'>
              <h2 className='header-title'>My Balance</h2>
              <p className='header-text'>Select Action</p>
            </div>
            <div className='header-bottom'>
              <div className='header-bottom-amount'>{balance.toFixed(2)}</div>
            </div>
            
          </div>
          
          <div className='form'>
            <form className='deposit'>
              <label>
                <input
                type='text'
                name='value'
                onChange={(e) => setUserAmount(e.target.value)}
                value={userAmount}
                />
              </label>
              <button type='submit' onClick={handleDepsit}>Deposit</button>
              <button type='submit' onClick={handleWithdraw}>Withdraw</button>
            </form>
          </div>

      <div className='Buttons'>
        <button onClick={() => dispatch(increaseByInterest())}>Interest</button>
        <button onClick={() => dispatch(decreaseByCharges())}>Charges</button>
      </div>
    </div>
    </div>
  );
}

export default App;
