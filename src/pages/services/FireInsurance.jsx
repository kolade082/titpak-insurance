import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const FireInsurance = () => {
  const serviceData = {
    category: "Fire Insurance",
    title: "Fire/Special Perils Insurance",
    subtitle: "Protect your property from fire and special risks",
    description: "Comprehensive fire and special perils insurance to safeguard your property, business assets, and investments against fire damage and other specified perils."
  };

  const features = [
    {
      icon: "🔥",
      title: "Fire Damage Coverage",
      description: "Protection against direct fire damage to buildings, contents, and business assets."
    },
    {
      icon: "🏠",
      title: "Property Protection",
      description: "Coverage for residential and commercial properties against fire and related perils."
    },
    {
      icon: "⚡",
      title: "Special Perils",
      description: "Protection against lightning, explosion, aircraft damage, and other specified risks."
    }
  ];

  const benefits = [
    {
      title: "Rapid Claims Settlement",
      description: "Fast and efficient processing of fire damage claims to help you recover quickly."
    },
    {
      title: "Expert Assessment",
      description: "Professional loss assessors to evaluate damage and ensure fair compensation."
    },
    {
      title: "Business Continuity",
      description: "Coverage for business interruption and loss of profits during reconstruction."
    },
    {
      title: "Replacement Cost",
      description: "Coverage based on replacement cost rather than depreciated value for better protection."
    },
    {
      title: "Flexible Coverage",
      description: "Customizable policies to match your specific property and business needs."
    },
    {
      title: "Risk Management",
      description: "Expert advice on fire prevention and risk mitigation strategies."
    }
  ];

  const coverage = [
    {
      title: "Fire Damage",
      description: "Direct damage caused by fire, lightning, and explosion to insured property."
    },
    {
      title: "Smoke Damage",
      description: "Coverage for smoke damage to property and contents from fire incidents."
    },
    {
      title: "Water Damage",
      description: "Protection against water damage from firefighting efforts and burst pipes."
    },
    {
      title: "Business Interruption",
      description: "Coverage for loss of income during property reconstruction after fire damage."
    },
    {
      title: "Debris Removal",
      description: "Costs for clearing and removing debris after fire damage."
    },
    {
      title: "Alternative Accommodation",
      description: "Temporary accommodation costs for residential policyholders during repairs."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/fire/1.svg`,
    `${import.meta.env.BASE_URL}assets/service-images/fire/2.jpg`
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

export default FireInsurance;