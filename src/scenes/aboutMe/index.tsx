import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full bg-black">
      <motion.div
        className="mx-auto w-4/5"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        <div className=" flex gap-11">
          <HText>ABOUT ME</HText>
          <div className="h-[2px] w-[30px] bg-primary-500"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
