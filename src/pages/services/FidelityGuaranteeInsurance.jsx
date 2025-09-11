import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const FidelityGuaranteeInsurance = () => {
  const serviceData = {
    category: "General Accident Insurance",
    title: "Fidelity Guarantee Insurance",
    subtitle: "Protect your business from employee dishonesty",
    description: "Comprehensive fidelity guarantee insurance to protect your business from financial losses due to employee dishonesty, fraud, and theft. Available for both individual employees and entire firms."
  };

  const features = [
    {
      icon: "👤",
      title: "Per Person Coverage",
      description: "Individual fidelity coverage for specific employees in positions of trust and responsibility."
    },
    {
      icon: "🏢",
      title: "Per Firm Coverage",
      description: "Blanket fidelity coverage for all employees of the firm under a single policy."
    },
    {
      icon: "🛡️",
      title: "Employee Dishonesty",
      description: "Protection against losses caused by dishonest acts of employees and staff members."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Protection",
      description: "Coverage for theft, embezzlement, fraud, and other dishonest acts by employees."
    },
    {
      title: "Flexible Coverage Limits",
      description: "Adjustable coverage limits based on the number of employees and risk exposure."
    },
    {
      title: "Fast Claims Processing",
      description: "Quick investigation and settlement of fidelity claims to minimize financial impact."
    },
    {
      title: "Background Check Support",
      description: "Guidance on employee screening and background verification processes."
    },
    {
      title: "Risk Management",
      description: "Expert advice on internal controls and procedures to prevent employee dishonesty."
    },
    {
      title: "Legal Support",
      description: "Coverage for legal costs associated with investigating and prosecuting dishonest employees."
    }
  ];

  const coverage = [
    {
      title: "Theft and Embezzlement",
      description: "Coverage for direct theft of money, securities, or property by employees."
    },
    {
      title: "Fraud and Forgery",
      description: "Protection against fraudulent acts, forgery, and manipulation of financial records."
    },
    {
      title: "Computer Fraud",
      description: "Coverage for losses due to computer fraud and electronic theft by employees."
    },
    {
      title: "Money and Securities",
      description: "Protection for theft of cash, checks, bonds, and other financial instruments."
    },
    {
      title: "Property Theft",
      description: "Coverage for theft of business property, equipment, and inventory by employees."
    },
    {
      title: "Discovery Period",
      description: "Extended coverage period for discovering losses that occurred during the policy term."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/fidelity-guarantee/1.jpg`,
    `${import.meta.env.BASE_URL}assets/service-images/fidelity-guarantee/2.jpg`
  ];

  return (
    <InsuranceServicePage
      serviceData={serviceData}
      features={features}
      benefits={benefits}
      coverage={coverage}
      images={images}
    />
  );
};

export default FidelityGuaranteeInsurance;
