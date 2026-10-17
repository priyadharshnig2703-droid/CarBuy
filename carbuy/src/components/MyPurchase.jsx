
import { useState } from "react";


function MyPurchases() {
  const features = [
    "Powerful engine",
    "4x4 off-road capability",
    "Touchscreen infotainment system",
    "Premium interiors",
    "High ground clearance",
    "Multiple drive modes",
  ];

  const referenceImages = [
    "/thar-front.png",
    "/thar-back.png",
    "/thar-side.png",
    "/thar-interior.png",
  ];
const [mainImage, setMainImage] = useState("/Mahendira Thar.png");
const [showDealers, setShowDealers] = useState(false);

const dealerships = [
  {
    id: 1,
    name: "Mahindra Automotive - Kottivakkam",
    address:
      "Plot No. 7, East Coast Road, Kottivakkam, Chennai - 600041",
    phone: "7993063333",
    website:
      "https://dealers-auto.mahindra.com/location/tamil-nadu/chennai",
  },
  {
    id: 2,
    name: "Mahindra Automotive - Thoraipakkam",
    address:
      "No. 3/338, Rajiv Gandhi Salai, OMR Road, Thoraipakkam, Chennai - 600097",
    phone: "6309305050",
    website:
      "https://dealers-auto.mahindra.com/mahindra-automotive-manufacturers-pvt-ltd-chennai-car-dealer-thoraipakkam-chennai-472520/Home",
  },
  {
    id: 3,
    name: "Mahindra Automotive - Chromepet",
    address:
      "No. 223, GST Road, Radha Nagar, Chromepet, Chennai - 600044",
    phone: "7993063333",
    website:
      "https://dealers-auto.mahindra.com/mahindra-automotive-manufacturers-pvt-ltd-chennai-car-dealer-chromepet-chennai-471418/Home",
  },
];
  return (
    <section className="my-purchases-page">
      <h1 className="purchase-page-title">My Purchases</h1>

      <div className="purchase-heading">
        <h2>Mahindra Thar</h2>
        <span className="purchase-status">Purchased Car</span>
      </div>

      {/* Information columns */}
      <div className="purchase-info">

        <div className="description">
          <h3>Description</h3>
          <p>
            The Mahindra Thar is a rugged and versatile SUV
            built for adventure. It combines powerful
            performance with modern features, making it
            suitable for city drives and off-road journeys.
          </p>
        </div>

        <div className="overview">
          <h3>Overview</h3>
          <p><strong>Make:</strong> Mahindra</p>
          <p><strong>Model:</strong> Thar</p>
          <p><strong>Body Type:</strong> SUV</p>
          <p><strong>Fuel Type:</strong> Diesel / Petrol</p>
          <p><strong>Transmission:</strong> Manual / Automatic</p>
          <p><strong>Price:</strong> ₹12,00,000</p>
        </div>

        <div className="features">
          <h3>Features</h3>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <LoanCalculator />

      </div>

      {/* Main car image */}
      <div className="thar-main-image">
        <img src={mainImage} alt="Mahindra Thar" />
      </div>

      {/* Reference images */}
      <div className="reference-images">
        <h3>Reference Images</h3>
        <img
  src="/thar-side.png"
  alt="Thar side view"
  onClick={() => setMainImage("/thar-side.png")}
/>

        {referenceImages.map((image, index) => (
  <img
    src={image}
    alt={`Mahindra Thar view ${index + 1}`}
    key={image}
    onClick={() => setMainImage(image)}
  />
))}
      </div>

      {/* Features description */}
      <div className="features-description">
        <h3>Features Description</h3>
        <p>
          The Mahindra Thar combines rugged styling,
          off-road capability, a powerful engine, and
          modern comfort features for everyday driving
          and adventure.
        </p>
      </div>
      {/* Find a Dealership */}
<div className="find-dealer-section">
  <h2>Ready to Buy Your Mahindra Thar?</h2>

  <p>
    Visit an authorized Mahindra showroom to explore the car,
    arrange a test drive, and discuss pricing and availability.
  </p>

  <button
    className="find-dealer-btn"
    onClick={() => setShowDealers(!showDealers)}
  >
    {showDealers ? "Hide Dealerships" : "Find a Dealership"}
  </button>

  {showDealers && (
    <div className="dealership-list">
      {dealerships.map((dealer) => (
        <article className="dealership-card" key={dealer.id}>
          <h3>{dealer.name}</h3>

          <p>
            <strong>Address:</strong> {dealer.address}
          </p>

          <div className="dealership-actions">
            <a href={`tel:+91${dealer.phone}`}>
              Call Dealership
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                dealer.address
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>

            <a
              href={dealer.website}
              target="_blank"
              rel="noreferrer"
            >
              Official Website
            </a>
          </div>
        </article>
      ))}
    </div>
  )}
</div>
    </section>
  );
}


function LoanCalculator() {
  const [carPrice, setCarPrice] = useState(1200000);
  const [downPayment, setDownPayment] = useState(240000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);

  const loanAmount = carPrice - downPayment;

  function calculateEMI() {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (loanAmount <= 0 || months <= 0 || interestRate < 0) {
      setEmi(0);
      return;
    }

    if (monthlyRate === 0) {
      setEmi(loanAmount / months);
      return;
    }

    const monthlyEMI =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(monthlyEMI);
  }

  return (
    <div className="loan-calculator">
      <h3>Loan Calculator</h3>

      <label htmlFor="car-price">Car Price (₹)</label>
      <input
        id="car-price"
        type="number"
        min="1"
        value={carPrice}
        onChange={(e) => setCarPrice(Number(e.target.value))}
      />

      <label htmlFor="down-payment">Down Payment (₹)</label>
      <input
        id="down-payment"
        type="number"
        min="0"
        value={downPayment}
        onChange={(e) => setDownPayment(Number(e.target.value))}
      />

      <p>Loan Amount: ₹{Math.max(0, loanAmount).toLocaleString("en-IN")}</p>

      <label htmlFor="interest-rate">Interest Rate (%)</label>
      <input
        id="interest-rate"
        type="number"
        min="0"
        step="0.1"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />

      <label htmlFor="tenure">Tenure (Years)</label>
      <input
        id="tenure"
        type="number"
        min="1"
        step="1"
        value={tenure}
        onChange={(e) => setTenure(Number(e.target.value))}
      />

      <button type="button" onClick={calculateEMI}>
        Calculate
      </button>

      <p className="emi-result">
        Estimated EMI: ₹{Math.round(emi).toLocaleString("en-IN")} / month
      </p>
    </div>
  );
}

export default MyPurchases;
