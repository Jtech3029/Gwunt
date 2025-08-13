import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface CardProps {
  img: string;
  center?: number;
  glimmer: string;
  shadow: string;
}

function useTransitionConfig() {
  const x = useMemo(
    () => ({
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
    [],
  );
  return x;
}

function useHoverConfig(color: string) {
  return useMemo(
    () => ({
      boxShadow: `0 0 40px 30px ${color}`,
      y: -20,
    }),
    [color],
  );
}

export default function UpdatedCard({
  img,
  center = 50,
  glimmer,
  shadow,
}: CardProps) {
  const [showGlimmer, setShowGlimmer] = useState<boolean>(false);

  const Glimmer = () => {
    const [scope, animate] = useAnimate();
    const [scope1, animate1] = useAnimate();

    useEffect(() => {
      const vroom = async () => {
        animate(
          scope.current,
          {
            offsetDistance: "100%",
          },
          {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        );

        animate1(
          scope1.current,
          {
            offsetDistance: "150%",
          },
          {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        );
      };
      vroom();
    });

    return (
      <>
        <motion.div
          ref={scope}
          className={`h-[3px] w-[50px] bg-gradient-to-r from-transparent ${glimmer} to-transparent absolute`}
          style={{
            offsetPath: "inset(0% round 12px)",
            offsetDistance: "0%",
          }}
        />

        <motion.div
          ref={scope1}
          className={`h-[3px] w-[50px] bg-gradient-to-r from-transparent ${glimmer} to-transparent absolute`}
          style={{
            offsetPath: "inset(0% round 12px)",
            offsetDistance: "50%",
          }}
        />
      </>
    );
  };

  //default is w-60 and h-100
  //w-15 h-25
  return (
    <>
      <motion.div
        className="w-15 h-25 bg-cover relative overflow-hidden rounded-xl "
        onHoverStart={() => {
          setShowGlimmer(true);
        }}
        onHoverEnd={() => {
          setShowGlimmer(false);
        }}
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          hover: useHoverConfig(shadow),
        }}
        transition={useTransitionConfig()}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: `${center}%`,
        }}
      >
        {showGlimmer && <Glimmer />}
        <p className="text-white"> {showGlimmer}</p>
      </motion.div>
    </>
  );
}
