// import SectionTitle from "../Common/SectionTitle";
// import SingleFeature from "./SingleFeature";
// import featuresData from "./featuresData";

// const Features = () => {
//   return (
//     <>
//       <section id="features" className="py-16 md:py-20 lg:py-28">
//         <div className="container">
//           <SectionTitle
//             title="Main Features"
//             paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
//             center
//           />

//           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map((feature) => (
//               <SingleFeature key={feature.id} feature={feature} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Features;



// import SectionTitle from "../Common/SectionTitle";
// import SingleFeature from "./SingleFeature";
// import featuresData from "./featuresData";

// const Features = () => {
//   return (
//     <>
//       <section id="features" className="py-16 md:py-20 lg:py-28 bg-white text-bg-color-dark">
//         <div className="container">
//           <SectionTitle className="color-dark" 
//             title="Fonctionnalités Clés"

//             paragraph="Notre plateforme spécialisée offre des outils complets pour le suivi des patients atteints d'insuffisance rénale chronique."
//             center
//           />

//           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
//             {featuresData.map((feature) => (
//               <SingleFeature key={feature.id} feature={feature} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Features;

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Fonctionnalités Clés"
          paragraph="Découvrez les outils essentiels pour une gestion efficace des dossiers patients."
          center
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;