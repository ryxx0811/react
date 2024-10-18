export default function Input({userInput,onHandleChange}){

    return(
        <section id='user-input'>
            <div className='input-group'>
                <span>
                    <label>initla investment</label>
                    <input type='number' value={userInput.initialInvestment} onChange={(event)=>onHandleChange('initialInvestment',event.target.value)} required/>
                </span>
                <span>
                    <label>annual investment</label>
                    <input type='number' value={userInput.annualInvestment} onChange={(event)=>onHandleChange('annualInvestment',event.target.value)} required/>
                </span>
            </div>
            <div className='input-group'>
                <span>
                    <label>expected return</label>
                    <input type='number' value={userInput.expectedReturn} onChange={(event)=>onHandleChange('expectedReturn',event.target.value)} required/>
                </span>
                <span>
                    <label>duration</label>
                    <input type='number' value={userInput.duration} onChange={(event)=>onHandleChange('duration',event.target.value)} required/>
                </span>
            </div>

  

        </section>
    );
}