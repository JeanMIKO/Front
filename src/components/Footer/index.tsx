"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="relative z-10 bg-[#2C3E50] pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24" // Couleur de fond adaptée pour le footer
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Liens utiles */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-white">
                Liens utiles
              </h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ressources */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-white">
                Ressources
              </h2>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Recommandations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Support technique
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-6 text-xl font-bold text-white">
                Contact
              </h2>
              <ul>
                <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  <span className="font-bold">Email :</span> support@nephrocare.com
                </li>
                <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  <span className="font-bold">Téléphone :</span> +229 01 45 45 67 89
                </li>
                <li className="text-base text-body-color dark:text-body-color-dark">
                  <span className="font-bold">Adresse :</span> Cotonou, Bénin
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183] my-8"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Développé avec ❤️ par l&apos;équipe du groupe 4 AI4....
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;