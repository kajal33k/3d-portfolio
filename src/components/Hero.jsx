import { motion } from 'framer-motion'; // Import for animations (if needed)
import { styles } from '../styles'; // Ensure this is defined and correctly imported
import { ComputersCanvas } from './canvas'; // Ensure this is being used in the component or remove it

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-24">
      <div className="flex justify-center items-center h-full">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[12px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#89E5B9]" />
            <div className="w-1 sm:h-80 h-40 bg-[#89E5B9]" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#89E5B9]">Kajal</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>
              I develop user interfaces and user experiences as perfectly responsiveness. 
            </p>
          </div>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
