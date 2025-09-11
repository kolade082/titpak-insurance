import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";

const GroupPersonalAccidentInsurance = () => {
  const serviceData = {
    category: "General Accident Insurance",
    title: "Group Personal Accident Insurance",
    subtitle: "Protect your employees with comprehensive accident coverage",
    description: "Group personal accident insurance provides comprehensive protection for your employees against accidental death, permanent disability, and medical expenses. Available for any one person or per known accumulation groups."
  };

  const features = [
    {
      icon: "👥",
      title: "Any One Person",
      description: "Individual coverage for specific employees with high-risk job responsibilities."
    },
    {
      icon: "🏢",
      title: "Per Known Accumulation",
      description: "Group coverage for multiple employees with known accumulation limits for large groups."
    },
    {
      icon: "🛡️",
      title: "24/7 Coverage",
      description: "Round-the-clock protection for employees both on and off the job."
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Coverage",
      description: "Protection against accidental death, permanent disability, and medical expenses."
    },
    {
      title: "Flexible Group Sizes",
      description: "Coverage for small teams to large organizations with hundreds of employees."
    },
    {
      title: "Cost-Effective Premiums",
      description: "Group rates that provide better value than individual personal accident policies."
    },
    {
      title: "Fast Claims Processing",
      description: "Quick settlement of accident claims to support affected employees and families."
    },
    {
      title: "Worldwide Coverage",
      description: "Protection for employees traveling on business or working internationally."
    },
    {
      title: "Employee Retention",
      description: "Enhanced employee benefits package that helps attract and retain top talent."
    }
  ];

  const coverage = [
    {
      title: "Accidental Death",
      description: "Lump sum payment in case of death due to accident for the employee's beneficiaries."
    },
    {
      title: "Permanent Disability",
      description: "Compensation for permanent total or partial disability resulting from accidents."
    },
    {
      title: "Medical Expenses",
      description: "Coverage for medical treatment, hospitalization, and rehabilitation costs."
    },
    {
      title: "Temporary Disability",
      description: "Weekly compensation for temporary disability preventing work due to accidents."
    },
    {
      title: "Funeral Expenses",
      description: "Coverage for funeral and burial expenses in case of accidental death."
    },
    {
      title: "Education Benefits",
      description: "Educational support for children of employees who die in accidents."
    }
  ];

  const images = [
    `${import.meta.env.BASE_URL}assets/service-images/group-personal/1.jpg`,
    `${import.meta.env.BASE_URL}assets/service-images/group-personal/2.jpg`
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

export default GroupPersonalAccidentInsurance;
