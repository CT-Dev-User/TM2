import HeroSection from "./components/HeroSection";
import Alumini from "./components/Alumini";
import RelatedProgram from "./components/RelatedProgram";
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <>
      <HeroSection
        headerData={{
          title: (
            <span className="text-[#78ECFC]">
              Placed profiles & Testimonials
            </span>
          ),
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
      />
      <Alumini />
      <RelatedProgram />
      <Testimonials />
    </>
  );
};

export default page;
