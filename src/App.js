
// Importing the various modules and hooks
import { useSelector, useDispatch } from 'react-redux'
import { increaseByDeposit, increaseByInterest, decreaseByWithdraw, decreaseByCharges } from './store/balance';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';

// Setting up the main component
function App() {
  // setting the useState for the input amount
  const [userAmount, setUserAmount] = useState([])

  // getting the balance from the store with useSeletor
  const balance = useSelector((state) => state.balance.value)

  // initializing the dispatch hook
  const dispatch = useDispatch()

  // to handle the input deposit amount
  const handleDepsit = (e) => {
    e.preventDefault()
    dispatch(increaseByDeposit(Number(userAmount)))
    setUserAmount([])
  }

  // to handle the withdraw input amount
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
                      {/* user inputs amount to be dealt with */}
                      <input
                      className='amount-input'
                      type='text'
                      name='value'
                      onChange={(e) => setUserAmount(e.target.value)}
                      value={userAmount}
                      />
                    </label>
                    {/* choose what to do with the user input */}
                    <div className='button-container'>
                      <button className='deposit-button' type='submit' onClick={handleDepsit}>Deposit</button>
                      <button className='withdraw-button' type='submit' onClick={handleWithdraw}>Withdraw</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            
          </div>
          {/* dealing with the interest and charges calculations */}
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
