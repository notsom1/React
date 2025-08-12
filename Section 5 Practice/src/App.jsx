import { EntryFields } from "./components/EntryFields";
import { Header } from "./components/Header";
import { ResultsTable } from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function calculateResult({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const asd = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
    setData(asd);

    console.log(asd);
  }
  return (
    <>
      <Header></Header>
      <EntryFields calculate={calculateResult}></EntryFields>
      <ResultsTable data={data}></ResultsTable>
    </>
  );
}

export default App;
