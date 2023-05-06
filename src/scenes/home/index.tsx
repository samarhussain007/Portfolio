import { useState } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
  flexBetween: string;
};

const Home = ({ flexBetween, setSelectedPage }: Props) => {
  const [widthP, setWidthP] = useState(60);

  const handleOnMouseMove = (e: any) => {
    const { clientX } = e;
    const width = (clientX / window.innerWidth) * 100;

    setWidthP(width);
  };

  const handleOnTouchMove = (e: any) => {
    const { clientX } = e.touches[0];
    const width = (clientX / window.innerWidth) * 100;
    setWidthP(width);
  };

  return (
    <section
      onMouseMove={handleOnMouseMove}
      onTouchMove={handleOnTouchMove}
      className="relative h-screen w-full overflow-hidden bg-primary-500"
    >
      {/* Left Side */}
      <motion.div
        className={`left-side absolute grid min-h-full w-[60%] place-items-center overflow-hidden bg-primary-500`}
        initial={{ width: `20%` }}
        animate={{ width: `${widthP}%` }}
        transition={{ duration: 0.5 }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <h2 className="title text-7vw font-bold leading-none">
          Hey people,
          <br /> this is{" "}
          <span className="fancy text-secondary-500">Samar Hussain</span>
        </h2>
      </motion.div>
      {/* Right Side */}
      <div className="right-side absolute grid h-screen w-full place-items-center overflow-hidden bg-secondary-500">
        <h2 className="title w-[80%] text-7vw font-bold leading-none">
          I Build cool things for <br />{" "}
          <span className="fancy text-primary-500">Web</span> and{" "}
          <span className="fancy text-primary-500">Mobile</span>
        </h2>
      </div>
    </section>
  );
};

export default Home;
