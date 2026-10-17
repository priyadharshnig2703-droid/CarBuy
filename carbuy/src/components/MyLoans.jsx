
function MyLoans() {
  const activeLoans = [
    {
      id: 1,
      car: "Mahindra Thar",
      loanAmount: 960000,
      emi: 19927,
      interest: "9%",
      tenure: "5 years",
      outstanding: 720000,
      nextPayment: "05 Nov 2026",
      status: "Active",
    },
  ];

  const previousLoans = [
    {
      id: 1,
      car: "Hyundai Creta",
      loanAmount: 800000,
      emi: 16600,
      tenure: "5 years",
      closedDate: "15 Jan 2025",
      status: "Closed",
    },
  ];

  const money = (amount) =>
    `₹${amount.toLocaleString("en-IN")}`;

  return (
    <section className="my-loans-page">
      <h1>My Loans</h1>

      <p className="loans-subtitle">
        Manage your current and previous car loans.
      </p>

      {/* Active Loans */}
      <h2 className="active-loans-title">Active Loans</h2>

      <div className="loan-cards">
        {activeLoans.map((loan) => (
          <article
            className="active-loan-horizontal"
            key={loan.id}
          >
            <div className="active-loan-car">
              <h3>{loan.car}</h3>

              <span className="loan-status active">
                {loan.status}
              </span>
            </div>

            <div className="active-loan-detail">
              <p>Loan Amount</p>
              <strong>{money(loan.loanAmount)}</strong>
            </div>

            <div className="active-loan-detail">
              <p>Monthly EMI</p>
              <strong>{money(loan.emi)}</strong>
            </div>

            <div className="active-loan-detail">
              <p>Tenure</p>
              <strong>{loan.tenure}</strong>
            </div>

            <div className="active-loan-detail">
              <p>Next Payment</p>
              <strong>{loan.nextPayment}</strong>
            </div>
          </article>
        ))}
      </div>

      {/* Previous Loans */}
      <h2 className="previous-loans-title">
        Previous Loans
      </h2>

      <div className="previous-loans-list">
        {previousLoans.map((loan) => (
          <article
            className="previous-loan-card"
            key={loan.id}
          >
            <div className="previous-car-name">
              <h3>{loan.car}</h3>

              <span className="loan-status closed">
                {loan.status}
              </span>
            </div>

            <div className="previous-loan-detail">
              <span>Loan Amount</span>
              <strong>{money(loan.loanAmount)}</strong>
            </div>

            <div className="previous-loan-detail">
              <span>Monthly EMI</span>
              <strong>{money(loan.emi)}</strong>
            </div>

            <div className="previous-loan-detail">
              <span>Tenure</span>
              <strong>{loan.tenure}</strong>
            </div>

            <div className="previous-loan-detail">
              <span>Closed Date</span>
              <strong>{loan.closedDate}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MyLoans;
