import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const HouseholdersInsurance = () => {
  const serviceData = {
    category: "Householders Insurance",
    title: "Householders Insurance",
    subtitle: "Comprehensive protection for your home and belongings",
    description: "Protect your home and personal belongings with our comprehensive householders insurance. From fire and theft to natural disasters, we ensure your home and possessions are fully covered."
  };

  const features = [
    {
      icon: "🏠",
      title: "Building Coverage",
      description: "Protection for the structure of your home including walls, roof, and permanent fixtures."
    },
    {
      icon: "🛡️",
      title: "Contents Protection",
      description: "Coverage for your personal belongings, furniture, electronics, and valuables."
    },
    {
      icon: "💧",
      title: "Natural Disasters",
      description: "Protection against flood, storm, earthquake, and other natural calamities."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Coverage",
      description: "All-in-one protection for your home, contents, and personal liability in a single policy."
    },
    {
      title: "Flexible Limits",
      description: "Customizable coverage limits to match your home's value and contents worth."
    },
    {
      title: "New for Old Replacement",
      description: "Replacement of damaged items with new ones of similar quality and type."
    },
    {
      title: "Alternative Accommodation",
      description: "Coverage for temporary accommodation costs when your home is uninhabitable."
    },
    {
      title: "Personal Liability",
      description: "Protection against claims for accidental injury or property damage to others."
    },
    {
      title: "24/7 Claims Support",
      description: "Round-the-clock assistance for emergency claims and immediate support."
    }
  ];

  const coverage = [
    {
      title: "Fire and Lightning",
      description: "Protection against fire damage, lightning strikes, and related perils to your home."
    },
    {
      title: "Theft and Burglary",
      description: "Coverage for loss or damage due to theft, burglary, and attempted theft."
    },
    {
      title: "Water Damage",
      description: "Protection against damage from burst pipes, water leaks, and flooding."
    },
    {
      title: "Storm and Tempest",
      description: "Coverage for damage caused by storms, high winds, and severe weather conditions."
    },
    {
      title: "Malicious Damage",
      description: "Protection against vandalism and malicious damage to your property."
    },
    {
      title: "Glass Breakage",
      description: "Coverage for accidental breakage of glass in windows, doors, and mirrors."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/household/1.jpg`,
    `${import.meta.env.BASE_URL}assets/service-images/household/2.jpg`
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

export default HouseholdersInsurance;