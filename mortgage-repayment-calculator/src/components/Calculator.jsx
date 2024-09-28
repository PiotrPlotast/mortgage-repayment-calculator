/* eslint-disable react/prop-types */
export default function Calculator({
  amount,
  setAmount,
  term,
  setTerm,
  rate,
  setRate,
  type,
  setType,
  onClear,
  onCalculateResults,
}) {
  const reqFields = [amount, term, rate];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reqFields.every((field) => field !== "")) {
      onCalculateResults();
    }
  };

  return (
    <div className="px-4 py-6 md:px-8 md:w-1/2 bg-White md:rounded-r-none">
      <h1 className="text-Slate-900 font-bold text-2xl md:inline md:mr-4">
        Mortgage Calculator
      </h1>
      <button
        onClick={onClear}
        className="underline text-Slate-700 font-medium mt-2 mb-6"
      >
        Clear All
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount" className="font-bold text-Slate-700 ">
          Mortgage Amount
        </label>
        <div className="overflow-hidden border border-Slate-700 flex justify-between rounded mt-2 mb-6 focus-within:border-Lime">
          <input
            required
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="peer w-full text-Slate-900 font-bold text-lg pl-4 focus:outline-none order-2"
          />
          <div className="bg-Slate-100 text-Slate-700 font-bold py-2 px-4 text-lg peer-focus:bg-Lime peer-focus:text-Slate-900 order-1">
            £
          </div>
        </div>
        <div className="md:flex gap-4">
          <div>
            <label htmlFor="term" className="font-bold text-Slate-700 ">
              Mortgage Term
            </label>
            <div className="overflow-hidden border border-Slate-700 flex justify-between rounded mt-2 mb-6 focus-within:border-Lime">
              <input
                required
                type="number"
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="peer w-full text-Slate-900 font-bold text-lg pl-4 focus:outline-none"
              />
              <div className="bg-Slate-100 text-Slate-700 font-bold py-2 px-4 text-lg peer-focus:bg-Lime peer-focus:text-Slate-900">
                years
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="rate" className="font-bold text-Slate-700 ">
              Interest Rate
            </label>
            <div className="overflow-hidden border border-Slate-700 flex justify-between rounded mt-2 mb-6 focus-within:border-Lime">
              <input
                required
                type="number"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="peer w-full text-Slate-900 font-bold text-lg pl-4 focus:outline-none"
              />
              <div className="bg-Slate-100 text-Slate-700 font-bold py-2 px-4 text-lg peer-focus:bg-Lime peer-focus:text-Slate-900">
                %
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-start">
          <span className="font-bold  text-Slate-700">Mortgage Type</span>
          <div
            className="border border-Slate-900 rounded px-4 py-2 flex gap-4 md:w-full hover:border-Lime hover:bg-Lime-hover"
            style={
              type === "repayment"
                ? {
                    backgroundColor: "hsla(61, 70%, 52%, 0.2)",
                    border: "1px solid hsl(61, 70%, 52%)",
                  }
                : {}
            }
          >
            <input
              type="radio"
              name="type"
              id="type"
              checked={type === "repayment"}
              onChange={() => setType("repayment")}
              onClick={() => setType("repayment")}
              className="radio translate-y-[3px]"
            />
            <label className="font-bold w-full" htmlFor="type">
              Repayment
            </label>
          </div>
          <div
            className="border border-Slate-900 rounded px-4 py-2 flex gap-4 md:w-full hover:border-Lime hover:bg-Lime-hover"
            style={
              type === "interest-only"
                ? {
                    backgroundColor: "hsla(61, 70%, 52%, 0.2)",
                    border: "1px solid hsl(61, 70%, 52%)",
                  }
                : {}
            }
          >
            <input
              type="radio"
              name="type"
              id="type2"
              onChange={() => setType("interest-only")}
              checked={type === "interest-only"}
              onClick={() => setType("interest-only")}
              className="radio translate-y-[3px]"
            />
            <label className="font-bold w-full" htmlFor="type2">
              Interest Only
            </label>
          </div>
          <button
            type="submit"
            className="flex justify-center gap-4 bg-Lime rounded-full py-3 font-bold text-Slate-900 md:mt-8 md:px-8"
          >
            <img src="/images/icon-calculator.svg" alt="" />
            Calculate Repayments
          </button>
        </div>
      </form>
    </div>
  );
}
