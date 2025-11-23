import React from "react";
import InsuranceServicePage from "../../components/InsuranceServicePage";
import gl1 from "../../assets/service-images/life/group-life.jpg";
import gl2 from "../../assets/service-images/life/group-life-2.png";

const GroupLifeInsurance = () => {
  const serviceData = {
    category: "Life Insurance",
    title: "Group Life Insurance",
    subtitle: "Comprehensive life coverage for your organization",
    description: "Group life insurance provides affordable life coverage for employees and members of organizations. Offer valuable benefits to your team while protecting their families with our comprehensive group life insurance solutions."
  };

  const features = [
    {
      icon: "👥",
      title: "Group Coverage",
      description: "Life insurance coverage for all eligible employees or members of an organization."
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description: "Lower premiums through group rates and simplified underwriting processes."
    },
    {
      icon: "🔄",
      title: "Portable Benefits",
      description: "Coverage that can be continued by employees even after leaving the organization."
    }
  ];

  const benefits = [
    {
      title: "Affordable Premiums",
      description: "Group rates that provide significant savings compared to individual life insurance policies."
    },
    {
      title: "Simplified Underwriting",
      description: "Streamlined application process with minimal medical requirements for most employees."
    },
    {
      title: "Employee Retention",
      description: "Valuable benefit that helps attract and retain top talent in your organization."
    },
    {
      title: "Tax Advantages",
      description: "Employer-paid premiums may be tax-deductible as a business expense."
    },
    {
      title: "Flexible Coverage",
      description: "Customizable coverage amounts and benefit structures to meet organizational needs."
    },
    {
      title: "Administrative Support",
      description: "Full administrative support for enrollment, claims, and ongoing policy management."
    }
  ];

  const coverage = [
    {
      title: "Basic Life Coverage",
      description: "Standard life insurance coverage for all eligible employees or members."
    },
    {
      title: "Accidental Death",
      description: "Additional coverage for death due to accidents, often at no extra cost."
    },
    {
      title: "Dependent Coverage",
      description: "Optional coverage for spouses and children of covered employees."
    },
    {
      title: "Portable Benefits",
      description: "Option for employees to continue coverage after leaving the organization."
    },
    {
      title: "Conversion Privilege",
      description: "Right to convert group coverage to individual life insurance without medical exam."
    },
    {
      title: "Waiver of Premium",
      description: "Premium waiver if employee becomes totally disabled while covered."
    }
  ];

  const images = [gl1, gl2];

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

export default GroupLifeInsurance;
