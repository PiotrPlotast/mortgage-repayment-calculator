/* eslint-disable react/prop-types */
export default function Results({
  repayment,
  totalRepayment,
  calculated,
  interestOnly,
  type,
}) {
  return (
    <>
      {calculated ? (
        <div className="bg-Slate-900 p-5 md:w-1/2 md:rounded-bl-[60px]">
          <h2 className="text-Slate-100 font-bold text-lg">Your results</h2>
          <p className="text-p text-Slate-300 mt-2">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &ldquo;calculate
            repayments&ldquo; again.
          </p>
          {type === "interest-only" ? (
            <div className="p-2 border-t-4 border-Lime rounded bg-Slate-950 mt-12">
              <h2 className="text-Slate-300 md:text-xl">
                Your monthly interest payment
              </h2>
              <h3 className="text-Lime text-3xl font-bold mb-2 md:text-4xl">
                £{interestOnly}
              </h3>
            </div>
          ) : (
            <div className="p-2 border-t-4 border-Lime rounded bg-Slate-950 mt-12">
              <h2 className="text-Slate-300 mt-2 md:text-xl">
                Your monthly repayments
              </h2>
              <h3 className="text-Lime text-3xl font-bold mb-6 md:text-4xl">
                £{repayment}
              </h3>
              <hr />
              <h2 className="text-Slate-300 mt-4 md:text-lg">
                Total you&lsquo;ll repay over the term
              </h2>
              <h3 className="text-White font-bold pb-2 md:text-xl">
                £{totalRepayment}
              </h3>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-Slate-900 flex flex-col gap-4 mt-2 pt-8 pb-8 items-center md:justify-center text-center md:w-1/2 md:mt-0 md:rounded-bl-[60px]">
          <img src="/images/illustration-empty.svg" alt="" />
          <h2 className="text-Slate-100 font-bold text-2xl">
            Results shown here
          </h2>
          <p className="text-p text-Slate-300 px-2">
            Complete the form and click &ldquo;calculate repayments&ldquo; to
            see what your monthly repayments would be.
          </p>
        </div>
      )}
    </>
  );
}
