import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const AviationInsurance = () => {
  const serviceData = {
    category: "Aviation Insurance",
    title: "Aviation Insurance",
    subtitle: "Comprehensive protection for aviation operations",
    description: "We support clients by guiding operators to meet both Nigerian and international air transport registration and safety requirements. We offer wider-ranging protection plans that reduce premium expenses and manage claims quickly to limit disruptions to business activities."
  };

  const features = [
    {
      icon: "✈️",
      title: "Aircraft Hull Coverage",
      description: "All-risk insurance for aircraft hulls, spare parts, and equipment for commercial and private operators."
    },
    {
      icon: "👥",
      title: "Passenger & Third-Party Liability",
      description: "Comprehensive liability coverage for passengers and third parties with war-risk and excess liability protection."
    },
    {
      icon: "🏢",
      title: "Airport & Ground Services",
      description: "Protection for airports, ground services, and air navigation providers against operational risks."
    },
    {
      icon: "🔧",
      title: "Maintenance & Operations",
      description: "Coverage for maintenance, repairs, refuelling, and ground handling operations."
    },
    {
      icon: "👨‍✈️",
      title: "Pilot & Crew Protection",
      description: "Policies for pilots and crew covering loss of licence, loss of income, and personal accidents."
    },
    {
      icon: "💰",
      title: "Financial Protection",
      description: "Contingent liability insurance for banks, investors, and financiers involved in aviation operations."
    }
  ];

  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Expert guidance to meet both Nigerian and international air transport registration and safety requirements."
    },
    {
      title: "Cost-Effective Solutions",
      description: "Wider-ranging protection plans that reduce premium expenses while maintaining comprehensive coverage."
    },
    {
      title: "Rapid Claims Handling",
      description: "Quick and effective claims management to limit disruptions to your business activities."
    },
    {
      title: "Specialized Coverage",
      description: "Custom-designed cover for aviation operations including breakdowns and operational interruptions."
    },
    {
      title: "Expert Risk Assessment",
      description: "Professional analysis of aviation risks to ensure appropriate coverage levels and competitive pricing."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for emergency situations and claims support when you need it most."
    }
  ];

  const coverage = [
    {
      title: "Aircraft Hull & Spare Parts",
      description: "All-risk insurance covering physical damage to aircraft hulls and spare parts for commercial and private operators."
    },
    {
      title: "Passenger Liability",
      description: "Comprehensive liability coverage for passenger injury and death with appropriate limits for your operation size."
    },
    {
      title: "Third-Party Liability",
      description: "Protection against claims from third parties for property damage and bodily injury caused by aircraft operations."
    },
    {
      title: "War Risk Coverage",
      description: "Specialized coverage for war-related risks including hijacking, terrorism, and political violence."
    },
    {
      title: "Excess Liability",
      description: "Additional liability coverage above primary limits to protect against catastrophic claims."
    },
    {
      title: "Ground Operations",
      description: "Coverage for airport facilities, ground handling equipment, and air navigation systems."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/aviation/1.webp`,
    `${import.meta.env.BASE_URL}assets/service-images/aviation/2.jpg`,
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

export default AviationInsurance;
