import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import {useState} from 'react';
function App() {
  const [userInput,setUserInput] = useState(
    {
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 2,
        duration: 10,
    }
  );
  const inputIsvalid=userInput.duration>=1;

  function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    }
    );
}

  return (
    <>
      <Header/>
      <main>
        <Input userInput={userInput} onHandleChange={handleChange}/>
        {!inputIsvalid&&<p className='center'>Please enter a duration greater than zero.</p>}
        {inputIsvalid&&<Result initialInvestment={userInput.initialInvestment}
                annualInvestment={userInput.annualInvestment}
                expectedReturn={userInput.expectedReturn}
                duration={userInput.duration}/>}
      </main>
    </>
  )
}

export default App
