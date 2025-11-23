import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";
import engineering1 from "../../assets/service-images/engineering/1.jpg";
import engineering2 from "../../assets/service-images/engineering/2.jpg";

const EngineeringInsurance = () => {
  const serviceData = {
    category: "Engineering Insurance",
    title: "Engineering All Risks Insurance",
    subtitle: "Comprehensive protection for construction and engineering projects",
    description: "Specialized insurance coverage for construction projects, machinery, and engineering works. Protect your investments with our comprehensive engineering insurance solutions."
  };

  const features = [
    {
      icon: "🏗️",
      title: "Construction All Risks (CAR)",
      description: "Comprehensive coverage for construction projects including buildings, infrastructure, and civil works."
    },
    {
      icon: "⚙️",
      title: "Erection All Risks (EAR)",
      description: "Protection for machinery and equipment during installation, erection, and commissioning phases."
    },
    {
      icon: "🔧",
      title: "Plant All Risks (PAR)",
      description: "Coverage for machinery and equipment in operation, including breakdown and business interruption."
    }
  ];

  const benefits = [
    {
      title: "Project-Specific Coverage",
      description: "Tailored insurance solutions designed for your specific construction or engineering project needs."
    },
    {
      title: "Expert Risk Assessment",
      description: "Professional evaluation of project risks to ensure comprehensive coverage and optimal protection."
    },
    {
      title: "Flexible Policy Terms",
      description: "Adjustable coverage periods and terms to match your project timeline and requirements."
    },
    {
      title: "Fast Claims Processing",
      description: "Quick settlement of claims to minimize project delays and financial impact."
    },
    {
      title: "Technical Support",
      description: "Access to engineering experts for risk management and loss prevention advice."
    },
    {
      title: "Global Coverage",
      description: "International coverage for overseas projects and equipment transportation."
    }
  ];

  const coverage = [
    {
      title: "Physical Damage",
      description: "Coverage for damage to construction works, machinery, and equipment from various perils."
    },
    {
      title: "Third Party Liability",
      description: "Protection against claims for bodily injury and property damage to third parties."
    },
    {
      title: "Professional Indemnity",
      description: "Coverage for design errors, professional negligence, and related claims."
    },
    {
      title: "Delay in Start-Up",
      description: "Coverage for financial losses due to delays in project completion or equipment commissioning."
    },
    {
      title: "Testing and Commissioning",
      description: "Protection during testing, commissioning, and initial operation phases."
    },
    {
      title: "Transit Coverage",
      description: "Protection for equipment and materials during transportation to and from project sites."
    }
  ];

  const images = [engineering1, engineering2];

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

export default EngineeringInsurance;