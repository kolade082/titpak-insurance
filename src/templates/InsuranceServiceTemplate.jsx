import React from "react";
import InsuranceServicePage from "../components/InsuranceServicePage";

const InsuranceServiceTemplate = () => {
  // ========================================
  // CUSTOMIZE THIS SECTION FOR YOUR PAGE
  // ========================================
  
  const serviceData = {
    category: "Your Category", // e.g., "Property Insurance", "Vehicle Insurance"
    title: "Your Service Title", // e.g., "Marine Cargo Insurance"
    subtitle: "Your service subtitle", // e.g., "Protect your cargo during transit"
    description: "Detailed description of your insurance service. Explain what it covers, who it's for, and why customers should choose it."
  };

  const features = [
    {
      icon: "🚢", // Choose appropriate emoji
      title: "Feature 1",
      description: "Description of this feature and how it benefits the customer."
    },
    {
      icon: "📦",
      title: "Feature 2", 
      description: "Description of this feature and how it benefits the customer."
    },
    {
      icon: "🛡️",
      title: "Feature 3",
      description: "Description of this feature and how it benefits the customer."
    },
    {
      icon: "💰",
      title: "Feature 4",
      description: "Description of this feature and how it benefits the customer."
    },
    {
      icon: "⚡",
      title: "Feature 5",
      description: "Description of this feature and how it benefits the customer."
    },
    {
      icon: "📋",
      title: "Feature 6",
      description: "Description of this feature and how it benefits the customer."
    }
  ];

  const benefits = [
    {
      title: "Benefit 1",
      description: "Explain how this benefit helps customers and why it's valuable."
    },
    {
      title: "Benefit 2",
      description: "Explain how this benefit helps customers and why it's valuable."
    },
    {
      title: "Benefit 3",
      description: "Explain how this benefit helps customers and why it's valuable."
    },
    {
      title: "Benefit 4",
      description: "Explain how this benefit helps customers and why it's valuable."
    },
    {
      title: "Benefit 5",
      description: "Explain how this benefit helps customers and why it's valuable."
    },
    {
      title: "Benefit 6",
      description: "Explain how this benefit helps customers and why it's valuable."
    }
  ];

  const coverage = [
    {
      title: "Coverage Item 1",
      description: "Detailed description of what this coverage includes and protects."
    },
    {
      title: "Coverage Item 2",
      description: "Detailed description of what this coverage includes and protects."
    },
    {
      title: "Coverage Item 3",
      description: "Detailed description of what this coverage includes and protects."
    },
    {
      title: "Coverage Item 4",
      description: "Detailed description of what this coverage includes and protects."
    },
    {
      title: "Coverage Item 5",
      description: "Detailed description of what this coverage includes and protects."
    },
    {
      title: "Coverage Item 6",
      description: "Detailed description of what this coverage includes and protects."
    }
  ];

  const claimsProcess = [
    {
      step: "1",
      title: "Step 1",
      description: "Description of what happens in this step of the claims process."
    },
    {
      step: "2", 
      title: "Step 2",
      description: "Description of what happens in this step of the claims process."
    },
    {
      step: "3",
      title: "Step 3", 
      description: "Description of what happens in this step of the claims process."
    },
    {
      step: "4",
      title: "Step 4",
      description: "Description of what happens in this step of the claims process."
    }
  ];

  // ========================================
  // END CUSTOMIZATION SECTION
  // ========================================

  return (
    <InsuranceServicePage
      serviceData={serviceData}
      features={features}
      benefits={benefits}
      coverage={coverage}
      claimsProcess={claimsProcess}
      ctaText="Get [Service Name] Quote" // Customize the CTA button text
      ctaLink="/titpak-insurance/get-quote" // Keep this as is for now
    />
  );
};

export default InsuranceServiceTemplate;

