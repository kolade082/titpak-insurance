import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const MoneyInsurance = () => {
  const serviceData = {
    category: "General Accident Insurance",
    title: "Money Insurance",
    subtitle: "Protect your cash and valuables in transit and storage",
    description: "Specialized money insurance coverage for cash, valuables, and financial instruments. Protect your money during transit, in safes, and in counting areas with our comprehensive coverage."
  };

  const features = [
    {
      icon: "🚚",
      title: "Cash in Transit",
      description: "Protection for money being transported between locations, banks, and business premises."
    },
    {
      icon: "🏦",
      title: "Cash in Safe",
      description: "Coverage for money stored in safes, vaults, and secure storage facilities."
    },
    {
      icon: "💰",
      title: "Money in Counting Area",
      description: "Protection for cash being counted, sorted, or processed in designated areas."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Coverage",
      description: "All-inclusive protection for cash, checks, and financial instruments in various scenarios."
    },
    {
      title: "Flexible Limits",
      description: "Adjustable coverage limits based on your cash handling volumes and risk exposure."
    },
    {
      title: "24/7 Protection",
      description: "Round-the-clock coverage for money in transit, storage, and processing areas."
    },
    {
      title: "Fast Claims Processing",
      description: "Quick settlement of money loss claims to minimize financial impact on your business."
    },
    {
      title: "Security Requirements",
      description: "Guidance on security measures and procedures to reduce risk and potential losses."
    },
    {
      title: "Risk Assessment",
      description: "Professional evaluation of cash handling risks and security recommendations."
    }
  ];

  const coverage = [
    {
      title: "Theft and Robbery",
      description: "Protection against theft, robbery, and hold-up incidents involving cash and valuables."
    },
    {
      title: "Transit Coverage",
      description: "Coverage for money being transported by employees, security companies, or couriers."
    },
    {
      title: "Safe Storage",
      description: "Protection for cash stored in safes, vaults, and secure storage facilities."
    },
    {
      title: "Counting Areas",
      description: "Coverage for money being counted, sorted, or processed in designated areas."
    },
    {
      title: "ATM Coverage",
      description: "Protection for cash in ATMs, cash dispensers, and automated banking machines."
    },
    {
      title: "Employee Dishonesty",
      description: "Coverage for losses due to employee theft or dishonesty involving money."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/money/1.jpg`,
    `${import.meta.env.BASE_URL}assets/service-images/money/2.jpg`
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

export default MoneyInsurance;