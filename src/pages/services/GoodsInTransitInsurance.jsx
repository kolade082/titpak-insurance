import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";
import git1 from "../../assets/service-images/goods-in-transit/1.jpg";
import git2 from "../../assets/service-images/goods-in-transit/2.webp";

const GoodsInTransitInsurance = () => {
  const serviceData = {
    category: "General Accident Insurance",
    title: "Goods in Transit Insurance",
    subtitle: "Protect your goods during transportation",
    description: "Comprehensive coverage for loss or damage to goods while being transported. Protect your business from various risks associated with shipping and logistics operations."
  };

  const features = [
    {
      icon: "🚛",
      title: "Goods in Transit",
      description: "Coverage for goods being transported by road, rail, air, or sea to their destination."
    },
    {
      icon: "📦",
      title: "General Goods",
      description: "Protection for a wide range of general merchandise and commercial goods."
    },
    {
      icon: "🏭",
      title: "Own Goods",
      description: "Coverage for goods owned by the insured being transported for business purposes."
    }
  ];

  const benefits = [
    {
      title: "All Risks Coverage",
      description: "Comprehensive protection against all risks of physical loss or damage during transit."
    },
    {
      title: "Flexible Transit Periods",
      description: "Coverage for various transit periods from pickup to final delivery destination."
    },
    {
      title: "Multiple Transport Modes",
      description: "Protection for goods transported by road, rail, air, sea, or any combination."
    },
    {
      title: "Fast Claims Settlement",
      description: "Quick processing and settlement of transit loss claims to minimize business disruption."
    },
    {
      title: "Global Coverage",
      description: "International coverage for goods being transported across borders and continents."
    },
    {
      title: "Expert Risk Assessment",
      description: "Professional evaluation of transit risks and recommendations for optimal protection."
    }
  ];

  const coverage = [
    {
      title: "Physical Loss or Damage",
      description: "Coverage for physical loss or damage to goods during transportation by any means."
    },
    {
      title: "Theft and Pilferage",
      description: "Protection against theft, pilferage, and unauthorized removal of goods in transit."
    },
    {
      title: "Accident Damage",
      description: "Coverage for damage caused by accidents, collisions, and transportation mishaps."
    },
    {
      title: "Natural Disasters",
      description: "Protection against damage from storms, floods, earthquakes, and other natural perils."
    },
    {
      title: "Loading and Unloading",
      description: "Coverage for damage during loading, unloading, and handling of goods."
    },
    {
      title: "Transit Delays",
      description: "Protection against losses due to delays in transit and delivery schedules."
    }
  ];

  const images = [git1, git2];

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

export default GoodsInTransitInsurance;
