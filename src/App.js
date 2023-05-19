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
              <div className='header-bottom-amount'>R{balance.toFixed(2)}  <span className='zar'>ZAR</span></div>
              <div className='header-bottom-dw'>
                <div className='form-container'>
                  <form className='form'>
                    <label>
                      <input
                      className='amount-input'
                      type='text'
                      name='value'
                      onChange={(e) => setUserAmount(e.target.value)}
                      value={userAmount}
                      />
                    </label>
                    <div className='button-container'>
                      <button className='deposit-button' type='submit' onClick={handleDepsit}>Deposit</button>
                      <button className='withdraw-button' type='submit' onClick={handleWithdraw}>Withdraw</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            
          </div>
          <div className='bottom'>
            <div className='other-buttons'>
              <button className='interest' onClick={() => dispatch(increaseByInterest())}>Interest</button>
              <button className='charges' onClick={() => dispatch(decreaseByCharges())}>Charges</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
