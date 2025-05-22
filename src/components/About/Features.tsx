import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="w-15 h-15"
      />
      <h3 className="text-xl font-bold my-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-justify">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresList = [
    {
      icon: "/icons/delivery.svg",
      title: "Fast Nationwide Delivery",
      description:
        "We pack each plant with love and care, ensuring it arrives at your doorstep looking as vibrant and healthy as it did in our greenhouse.",
    },
    {
      icon: "/icons/eco.svg",
      title: "Eco-Friendly Packaging",
      description:
        "We believe in growing green — literally and ethically. That's why we use recyclable, compostable, and minimal-waste packaging.",
    },
    {
      icon: "/icons/expert.svg",
      title: "Expert Growing & Support",
      description:
        "Our plants are nurtured by expert growers who know exactly what each species needs. When you adopt one, you'll receive.",
    },
    {
      icon: "/icons/happiness.svg",
      title: "Happiness Guaranteed",
      description:
        "Your satisfaction means everything to us. If your plant isn't thriving or arrives damaged, our Happiness Guarantee has you covered.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
