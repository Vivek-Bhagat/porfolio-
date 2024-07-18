import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { motion } from "framer-motion";
import { slideUp } from "../Preloader/anim";
import styles from "./styles.module.scss";
import Ripple from "../magicui/ripple";
import GridPattern from "../magicui/grid-pattern";
export default function Hero() {
  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      {/* <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div> */}
      {/* <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
          Ripple
        </p>
        <Ripple />
      </div> */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-8xl font-medium tracking-tighter text-black dark:text-white">
          Vivek Bhagat
        </p>
        <GridPattern
          width={80}
          height={80}
          x={1}
          y={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,black,transparent,black)] "
          )}
        />
      </div>
    </motion.main>
  );
}
