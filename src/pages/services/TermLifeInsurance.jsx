import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";
import termLife1 from "../../assets/service-images/life/term-life.webp";
import termLife2 from "../../assets/service-images/life/term-life-2.jpeg";

const TermLifeInsurance = () => {
  const serviceData = {
    category: "Life Insurance",
    title: "Term Life Insurance",
    subtitle: "Affordable protection for a specific period",
    description: "Term life insurance provides high coverage at affordable premiums for a specific period. Perfect for protecting your family during your working years or covering specific financial obligations like mortgages and education expenses."
  };

  const features = [
    {
      icon: "⏰",
      title: "Fixed Term Period",
      description: "Coverage for a specific period such as 10, 20, or 30 years based on your needs."
    },
    {
      icon: "💵",
      title: "Affordable Premiums",
      description: "Lower cost coverage that provides maximum protection for your premium dollar."
    },
    {
      icon: "🔄",
      title: "Renewable Options",
      description: "Option to renew coverage at the end of the term without medical examination."
    }
  ];

  const benefits = [
    {
      title: "High Coverage Amount",
      description: "Maximum death benefit coverage for the lowest possible premium cost."
    },
    {
      title: "Flexible Terms",
      description: "Choose from various term lengths to match your specific protection needs."
    },
    {
      title: "Convertible Options",
      description: "Option to convert to permanent life insurance without medical underwriting."
    },
    {
      title: "Family Protection",
      description: "Ideal for protecting young families during their most vulnerable years."
    },
    {
      title: "Debt Coverage",
      description: "Perfect for covering mortgages, loans, and other financial obligations."
    },
    {
      title: "Simple and Clear",
      description: "Straightforward coverage with no complex features or cash value components."
    }
  ];

  const coverage = [
    {
      title: "Death Benefit",
      description: "Tax-free lump sum payment to beneficiaries if death occurs during the term."
    },
    {
      title: "Level Premiums",
      description: "Fixed premium payments that remain constant throughout the term period."
    },
    {
      title: "Renewal Option",
      description: "Right to renew coverage at the end of the term with updated premiums."
    },
    {
      title: "Conversion Privilege",
      description: "Option to convert to whole life insurance without medical examination."
    },
    {
      title: "Accelerated Benefits",
      description: "Early payment of benefits for terminal illness or critical conditions."
    },
    {
      title: "Waiver of Premium",
      description: "Premium waiver if the insured becomes totally disabled during the term."
    }
  ];

  const images = [termLife1, termLife2];

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

export default TermLifeInsurance;
