import React from "react";
import InsuranceServicePage from "../components/InsuranceServicePage";

const OilGasEnergyInsurance = () => {
  const serviceData = {
    category: "Oil, Gas & Energy Insurance",
    title: "Oil, Gas & Energy Insurance",
    subtitle: "Specialized protection for complex energy operations",
    description: "We have built a reputation for delivering highly specialized insurance and risk-control solutions for complex projects, whether onshore or offshore. Our portfolio covers an extensive range of exposures from well-control incidents to large-scale construction undertakings and environmental liabilities."
  };

  const features = [
    {
      icon: "🛢️",
      title: "Property Protection",
      description: "All-risks cover for physical loss or damage to assets including drilling units, wellheads, and pipelines."
    },
    {
      icon: "⚡",
      title: "Operators' Additional Costs",
      description: "Coverage for well-control incidents, redrilling expenses, and pollution cleanup costs."
    },
    {
      icon: "🏗️",
      title: "Construction & Installation",
      description: "Cover for construction projects including pipe-laying and minor works associated with well development."
    },
    {
      icon: "🌊",
      title: "Offshore Operations",
      description: "Specialized coverage for FPSO vessels, offshore fleets, and critical infrastructure support."
    },
    {
      icon: "⚠️",
      title: "Environmental Liability",
      description: "Protection against environmental liabilities, seepage, pollution, and contamination risks."
    },
    {
      icon: "🔒",
      title: "Terrorism Protection",
      description: "Coverage for terrorism-related threats affecting oil and gas installations and operations."
    }
  ];

  const benefits = [
    {
      title: "Specialized Expertise",
      description: "Deep understanding of oil and gas industry risks with specialized underwriting and claims expertise."
    },
    {
      title: "Risk Analysis",
      description: "Comprehensive risk identification and analysis to estimate maximum potential loss scenarios."
    },
    {
      title: "Loss Prevention",
      description: "Practical advice on measures to reduce or eliminate loss exposure in your operations."
    },
    {
      title: "Competitive Pricing",
      description: "Clear risk profiles enable us to negotiate competitive pricing and favorable terms with insurers."
    },
    {
      title: "Full-Spectrum Protection",
      description: "Structured policy programs ensuring comprehensive coverage across all operational areas."
    },
    {
      title: "Business Continuity",
      description: "Protection against production interruptions, loss of income, and vessel hire disruptions."
    }
  ];

  const coverage = [
    {
      title: "Property Protection",
      description: "All-risks cover for physical loss or damage to assets owned or managed, including drilling units, wellheads, jackets, risers, and pipelines."
    },
    {
      title: "Operators' Additional Costs",
      description: "Coverage for well-control incidents, redrilling expenses, and liabilities connected to seepage, pollution, cleanup, and contamination."
    },
    {
      title: "Liability Protection",
      description: "Safeguards against third-party legal and contractual claims arising from offshore operations not covered by general liability policies."
    },
    {
      title: "Construction & Installation",
      description: "Cover for small-scale projects such as pipe-laying and minor works associated with well development and maintenance."
    },
    {
      title: "Environmental Coverage",
      description: "Protection against environmental liabilities, cleanup costs, and regulatory compliance requirements."
    },
    {
      title: "Business Interruption",
      description: "Coverage for loss of income and additional expenses due to production interruptions or vessel hire disruptions."
    }
  ];

  return (
    <InsuranceServicePage
      serviceData={serviceData}
      features={features}
      benefits={benefits}
      coverage={coverage}
    />
  );
};

export default OilGasEnergyInsurance;
