import { calculateInvestmentResults,formatter } from "../util/investment.js"
export default function Result({initialInvestment,
                                annualInvestment,
                                expectedReturn,
                                duration}){
    const input ={initialInvestment,
                  annualInvestment,
                  expectedReturn,
                  duration
                 }
    const value=calculateInvestmentResults(input);
    
    return(
        <table id='result'>
            <thead >
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {value.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
                    const totalAmountInvested=yearData.valueEndOfYear-totalInterest
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>

        </table>
    );
}