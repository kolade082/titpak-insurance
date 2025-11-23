import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";
import burglary1 from "../../assets/service-images/burglary/1.jpg";
import burglary2 from "../../assets/service-images/burglary/2.jpeg";

const BurglaryInsurance = () => {
  const serviceData = {
    category: "General Accident Insurance",
    title: "Burglary Insurance",
    subtitle: "Protect your premises from theft and burglary",
    description: "Comprehensive burglary insurance coverage for both private and public premises. Safeguard your property, equipment, and valuables against theft and burglary with our specialized protection."
  };

  const features = [
    {
      icon: "🏠",
      title: "Private Premises",
      description: "Protection for residential properties including homes, apartments, and private residences."
    },
    {
      icon: "🏢",
      title: "Public Premises",
      description: "Coverage for commercial buildings, offices, shops, and public establishments."
    },
    {
      icon: "🔒",
      title: "Forced Entry",
      description: "Protection against theft through forced entry, breaking, and entering."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Coverage",
      description: "Protection for buildings, contents, stock, and equipment against burglary and theft."
    },
    {
      title: "Flexible Limits",
      description: "Customizable coverage limits based on your property value and risk assessment."
    },
    {
      title: "Fast Claims Settlement",
      description: "Quick processing and settlement of burglary claims to minimize business disruption."
    },
    {
      title: "Security Requirements",
      description: "Guidance on security measures to reduce risk and potentially lower premiums."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for emergency situations and immediate claims support."
    },
    {
      title: "Risk Assessment",
      description: "Professional evaluation of security risks and recommendations for improvement."
    }
  ];

  const coverage = [
    {
      title: "Building Damage",
      description: "Coverage for damage to buildings caused by forced entry during burglary attempts."
    },
    {
      title: "Contents Theft",
      description: "Protection for furniture, equipment, and personal belongings stolen during burglary."
    },
    {
      title: "Stock and Inventory",
      description: "Coverage for business stock, merchandise, and inventory lost to theft."
    },
    {
      title: "Cash and Valuables",
      description: "Protection for cash, jewelry, and other valuables stolen from premises."
    },
    {
      title: "Equipment Theft",
      description: "Coverage for business equipment, tools, and machinery stolen during burglary."
    },
    {
      title: "Evidence of Forced Entry",
      description: "Coverage requires evidence of forced entry to validate burglary claims."
    }
  ];
  const images = [burglary1, burglary2];

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

export default BurglaryInsurance;