import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const WholeLifeInsurance = () => {
  const serviceData = {
    category: "Life Insurance",
    title: "Whole Life Insurance",
    subtitle: "Lifetime protection with cash value accumulation",
    description: "Whole life insurance provides permanent coverage for your entire lifetime with guaranteed death benefits and cash value accumulation. Build wealth while protecting your loved ones with this comprehensive life insurance solution."
  };

  const features = [
    {
      icon: "♾️",
      title: "Lifetime Coverage",
      description: "Permanent protection that lasts for your entire life as long as premiums are paid."
    },
    {
      icon: "💰",
      title: "Cash Value Growth",
      description: "Tax-deferred cash value accumulation that grows over time and can be accessed."
    },  
    {
      icon: "🛡️",
      title: "Guaranteed Benefits",
      description: "Guaranteed death benefit and cash value growth with fixed premium payments."
    }
  ];

  const benefits = [
    {
      title: "Permanent Protection",
      description: "Lifetime coverage that never expires as long as premiums are maintained."
    },
    {
      title: "Cash Value Accumulation",
      description: "Build cash value over time that can be borrowed against or withdrawn."
    },
    {
      title: "Tax Advantages",
      description: "Tax-deferred growth and tax-free death benefits for beneficiaries."
    },
    {
      title: "Estate Planning",
      description: "Ideal for estate planning and wealth transfer to future generations."
    },
    {
      title: "Fixed Premiums",
      description: "Level premium payments that never increase throughout your lifetime."
    },
    {
      title: "Dividend Potential",
      description: "Participating policies may earn dividends that can increase cash value."
    }
  ];

  const coverage = [
    {
      title: "Death Benefit",
      description: "Guaranteed tax-free death benefit paid to beneficiaries upon the insured's death."
    },
    {
      title: "Cash Value",
      description: "Accumulated cash value that grows over time and can be accessed during lifetime."
    },
    {
      title: "Policy Loans",
      description: "Ability to borrow against cash value at competitive interest rates."
    },
    {
      title: "Surrender Value",
      description: "Option to surrender the policy and receive accumulated cash value."
    },
    {
      title: "Paid-Up Option",
      description: "Use cash value to pay future premiums and maintain coverage."
    },
    {
      title: "Estate Planning",
      description: "Tax-efficient wealth transfer and estate planning benefits."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/life/whole-life.png`,
    `${import.meta.env.BASE_URL}assets/service-images/life/whole-life-2.jpg`
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

export default WholeLifeInsurance;
