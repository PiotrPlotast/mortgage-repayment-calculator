import { useState } from "react";
import Calculator from "./Calculator";
import Results from "./Results";
export default function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("repayment");
  const [calculated, setCalculated] = useState(false);
  const [repayment, setRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [interestOnly, setInterestOnly] = useState(0);
  function handleClear() {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setCalculated(false);
    setRepayment(0);
    setTotalRepayment(0);
    setInterestOnly(0);
  }
  function calculateResults() {
    const repayment =
      Math.round(
        ((amount * (rate / 100 / 12)) /
          (1 - Math.pow(1 + rate / 100 / 12, -term * 12))) *
          100
      ) / 100;
    const totalRepayment = Math.round(repayment * term * 12 * 100) / 100;
    const interestOnly = Math.round((amount * rate) / 100 / 12);
    setRepayment(repayment);
    setTotalRepayment(totalRepayment);
    setInterestOnly(interestOnly);
    setCalculated(true);
  }

  return (
    <div className="flex justify-center items-center md:bg-Slate-300 h-[100dvh]">
      <div className="md:flex max-w-4xl bg-White md:rounded-3xl md:overflow-hidden">
        <Calculator
          amount={amount}
          setAmount={setAmount}
          term={term}
          setTerm={setTerm}
          rate={rate}
          setRate={setRate}
          type={type}
          setType={setType}
          setCalculated={setCalculated}
          onClear={handleClear}
          onCalculateResults={calculateResults}
        />
        <Results
          repayment={repayment}
          totalRepayment={totalRepayment}
          interestOnly={interestOnly}
          calculated={calculated}
          type={type}
        />
      </div>
    </div>
  );
}
