"use client";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { id: 1, name: "Partenaire 1", logo: "/images/about/lrsia.png" },
    { id: 2, name: "Partenaire 2", logo: "/images/about/google.png" },
    { id: 3, name: "Partenaire 3", logo: "/images/about/uac.jpeg" },
    { id: 4, name: "Partenaire 4", logo: "/images/about/cnhu.png" },
    { id: 5, name: "Partenaire 5", logo: "/images/about/labef.jpeg" },
    { id: 6, name: "Partenaire 6", logo: "/images/about/ifri.jpeg" },
  ];

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Nos Partenaires
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Nous collaborons avec des partenaires de confiance pour offrir les meilleures solutions en néphrologie.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-dark"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;