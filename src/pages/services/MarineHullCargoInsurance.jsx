import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const MarineHullCargoInsurance = () => {
  const serviceData = {
    category: "Marine Insurance",
    title: "Marine Hull & Cargo Insurance",
    subtitle: "Comprehensive protection for maritime operations",
    description: "All goods imported into Nigeria must be insured by a locally licensed insurer. Our Marine Division helps businesses involved in international trade secure fast, suitable insurance solutions to protect their cargo, stay compliant, and remain competitive while ensuring full compliance with Nigerian maritime laws."
  };

  const features = [
    {
      icon: "🚢",
      title: "Hull & Machinery",
      description: "Comprehensive insurance for vessel hulls and machinery, including war and strike risks."
    },
    {
      icon: "📦",
      title: "Cargo Protection",
      description: "All-risk cargo insurance for goods in transit, ensuring compliance with Nigerian import requirements."
    },
    {
      icon: "⚖️",
      title: "Legal Compliance",
      description: "Full compliance with Nigerian and international maritime laws including the 2003 Cabotage Act."
    },
    {
      icon: "🛡️",
      title: "P&I Coverage",
      description: "Protection & Indemnity cover to handle liability exposures and third-party claims."
    },
    {
      icon: "💰",
      title: "Competitive Rates",
      description: "Highly competitive premium rates with the widest protection available in the market."
    },
    {
      icon: "⚡",
      title: "Rapid Claims",
      description: "Smooth and rapid claims handling to maintain steady cash flow for your business."
    }
  ];

  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Expert assistance to ensure full compliance with Nigerian and global maritime laws and regulations."
    },
    {
      title: "Risk Management",
      description: "Professional identification and management of possible risks with effective risk-transfer arrangements."
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of Nigerian maritime requirements and the 2003 Coastal and Inland Shipping Act."
    },
    {
      title: "Comprehensive Coverage",
      description: "Wide-ranging protection covering hull, cargo, liability, and operational risks in one policy."
    },
    {
      title: "Fast Processing",
      description: "Quick policy issuance and claims settlement to keep your maritime operations running smoothly."
    },
    {
      title: "Cost Savings",
      description: "Competitive pricing and efficient risk management to reduce your overall insurance costs."
    }
  ];

  const coverage = [
    {
      title: "Hull & Machinery Insurance",
      description: "Coverage for physical damage to vessel hulls and machinery, including war and strike risks."
    },
    {
      title: "Cargo Insurance",
      description: "All-risk protection for goods in transit, ensuring compliance with Nigerian import requirements."
    },
    {
      title: "Passenger Liability",
      description: "Liability coverage for passenger injury and death during maritime transport operations."
    },
    {
      title: "Contractual Obligations",
      description: "Coverage for contractual liabilities and obligations arising from maritime operations."
    },
    {
      title: "Protection & Indemnity",
      description: "Comprehensive P&I coverage for third-party liabilities not covered by hull insurance."
    },
    {
      title: "War & Strike Risks",
      description: "Specialized coverage for war-related risks and strikes affecting maritime operations."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/marine/1.jpg`,
    `${import.meta.env.BASE_URL}assets/service-images/marine/2.jpg`
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

export default MarineHullCargoInsurance;
