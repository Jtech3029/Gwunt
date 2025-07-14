import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

interface CardProps {
  img: string;
  center?: number;
  glimmer: string;
  shadow: string;
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
            duration: 7,
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
            duration: 7,
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

  return (
    <>
      <motion.div
        className="w-60 h-100 bg-cover relative overflow-hidden rounded-xl "
        onHoverStart={(event) => {
          setShowGlimmer(true);
        }}
        onHoverEnd={(event) => {
          setShowGlimmer(false);
        }}
        whileHover={{
          boxShadow: `0 0 80px 30px ${shadow}`,
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        }}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: `${center}%`,
        }}
      >
        {showGlimmer && <Glimmer />}
      </motion.div>
    </>
  );
}
