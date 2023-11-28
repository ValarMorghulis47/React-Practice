import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('pkr');
  const [to, setTo] = useState('eur');
  const [convertedAmount, setConvertedAmount] = useState("");
  const currencyinfo = useCurrencyInfo(from);
  const options = Object.keys(currencyinfo);
  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to]);
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
      >
        <div className='w-full'>
          <div className="className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'">
            <form onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyoptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  currencyoptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
