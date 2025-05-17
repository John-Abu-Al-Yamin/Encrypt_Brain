import BackgroundCircle from "./BackgroundCircle";
import HeroContent from "./HeroContent";
import HandsAnimation from "./HandsAnimation";

const Hero = () => {
  return (
    <div className=" dark:bg-black bg-white dark:text-white text-black">
      <div className="relative flex items-center justify-center h-[calc(100vh-80px)] overflow-hidden">
        <BackgroundCircle />
        <HeroContent />
        <div className="absolute z-50 w-full top-0 left-0">
          <HandsAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
