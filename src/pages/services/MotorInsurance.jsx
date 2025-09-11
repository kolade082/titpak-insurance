import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const MotorInsurance = () => {
  const serviceData = {
    category: "Motor Insurance",
    title: "Motor Insurance",
    subtitle: "Comprehensive protection for your vehicles",
    description: "Protect your vehicles with our comprehensive motor insurance coverage. From third-party liability to full comprehensive protection, we ensure you're covered for all eventualities on the road."
  };

  const features = [
    {
      icon: "🚗",
      title: "Third Party Coverage",
      description: "Essential liability protection covering damage to third-party property and bodily injury claims."
    },
    {
      icon: "🔥",
      title: "Fire & Theft Protection",
      description: "Comprehensive coverage against fire damage and theft of your vehicle."
    },  
    {
      icon: "🛡️",
      title: "Comprehensive Coverage",
      description: "Complete protection including own damage, third-party liability, and additional benefits."
    }
  ];

  const benefits = [
    {
      title: "24/7 Roadside Assistance",
      description: "Round-the-clock support for breakdowns, towing, and emergency repairs wherever you are."
    },
    {
      title: "Fast Claims Processing",
      description: "Quick and efficient claims settlement with minimal paperwork and maximum convenience."
    },
    {
      title: "Flexible Payment Options",
      description: "Choose from various payment plans that suit your budget and financial preferences."
    },
    {
      title: "No Claims Bonus",
      description: "Reward for safe driving with discounts on renewal premiums for claim-free periods."
    },
    {
      title: "Windscreen Cover",
      description: "Free replacement or repair of damaged windscreens without affecting your no-claims bonus."
    },
    {
      title: "Personal Accident Cover",
      description: "Additional protection for driver and passengers in case of accidents."
    }
  ];

  const coverage = [
    {
      title: "Third Party Liability",
      description: "Coverage for damage to third-party property and bodily injury claims as required by law."
    },
    {
      title: "Own Damage",
      description: "Protection against damage to your vehicle from accidents, fire, theft, and natural disasters."
    },
    {
      title: "Personal Accident",
      description: "Coverage for driver and passengers in case of death or permanent disability due to accidents."
    },
    {
      title: "Medical Expenses",
      description: "Reimbursement of medical costs for injuries sustained in covered accidents."
    },
    {
      title: "Windscreen Cover",
      description: "Free replacement or repair of damaged windscreens and windows."
    },
    {
      title: "Towing Charges",
      description: "Coverage for towing expenses when your vehicle cannot be driven after an accident."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/motor/1.webp`,
    `${import.meta.env.BASE_URL}assets/service-images/motor/2.jpg`
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

export default MotorInsurance;