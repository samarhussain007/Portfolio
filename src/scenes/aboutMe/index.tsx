import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  flexBetween: string;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full bg-black py-20">
      <motion.div
        className="mx-auto w-4/5"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        <div className={`mx-4 flex items-center gap-10`}>
          <HText>ABOUT ME</HText>
          <div className="h-[1px] w-[40%] bg-primary-500"></div>
        </div>
        <div className="grid grid-cols-2">
          {/* Description */}
          <div>
            <p className="py-14 text-sm text-white md:text-base">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React.
            </p>
          </div>
          {/* Image */}
          <div>
            <div className="relative">
              <img />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
