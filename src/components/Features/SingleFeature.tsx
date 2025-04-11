// import { Feature } from "@/types/feature";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, paragraph } = feature;
//   return (
//     <div className="w-full">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//           {icon}
//         </div>
//         <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//           {title}
//         </h3>
//         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
//           {paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleFeature;


// import { Feature } from "@/types/feature";

// const SingleFeature = ({ feature }: { feature: Feature }) => {
//   const { icon, title, paragraph } = feature;
//   return (
//     <div className="w-full">
//       <div className="wow fadeInUp" data-wow-delay=".15s">
//         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
//           {icon}
//         </div>
//         <h3 className="text-lg font-bold text-black">{feature.title}</h3> {/* Ajoutez text-black ici */}
//         <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
//           {paragraph}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SingleFeature;





import { Feature } from "@/types/feature";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <Card className="hover:shadow-lg transition-transform duration-300 hover:scale-105">
      <CardHeader className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <CardTitle className="text-lg font-bold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-body-color">{paragraph}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SingleFeature;