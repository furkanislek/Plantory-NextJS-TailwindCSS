import React from "react";
import Image from "next/image";

const CareStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start gap-4 mb-10">
      <div className="flex-shrink-0 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
        <span className="text-4xl font-bold">{number}</span>
      </div>
      <div className="flex-grow pt-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-justify md:text-left">{description}</p>
      </div>
    </div>
  );
};

const PlantCareTips = () => {
  return (
    <div className="w-full py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-start justify-between min-w-[100%] gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center md:text-left">
            <span className="text-gray-800 text-center md:text-left">Plant Care </span>
            <span className="text-green-500 text-center md:text-left">Tips</span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg text-center md:text-left">
            Caring for Plants Should Be Simple – And Now It Is.
          </p>

          <div className="space-y-6">
            <CareStep
              number="01."
              title="Watering Guide"
              description="Each plant has different needs. Learn how to avoid overwatering and underwatering with our simple watering schedules for low, medium, and high-maintenance plants."
            />

            <CareStep
              number="02."
              title="Light & Placement Tips"
              description="From sun-soaking succulents to shade-loving ferns, discover which locations in your home give your plant the light it needs to thrive."
            />

            <CareStep
              number="03."
              title="Preventing Pests Naturally"
              description="Get ahead of pests like spider mites and fungus gnats with natural, plant-safe solutions. This guide includes homemade sprays, cleaning tips, and weekly routines."
            />

            <CareStep
              number="04."
              title="Seasonal Care Checklist"
              description="Just like us, plants feel the seasons change. Learn how to tweak your watering, light exposure, and feeding routines throughout the year for optimal growth."
            />
          </div>
        </div>

        <div className="w-full md:max-w-[30%] bg-[#F5F8FF]   min-h-[100%] rounded-3xl p-6 md:p-10 flex items-end justify-end">
          <Image
            src="/photos/header.webp"
            alt="Plant Care"
            width={600}
            height={600}
            className="object-contain min-h-[100%]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PlantCareTips;
