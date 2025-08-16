import { useEffect, useState } from "react";
import flag from "../assets/icons/Gwent_Flag.jpg";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionProps {
  page: React.ReactNode;
  initialState: boolean;
}

export default function PassedBar(props: TransitionProps) {
  const [check, setCheck] = useState<boolean>(props.initialState);

  useEffect(() => {
    if (!check) {
      setCheck(true);
    }
  }, [check]);

  return (
    <AnimatePresence mode="wait">
      {check && (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <div className="fixed w-screen h-30 bg-black opacity-70 top-1/2 -translate-y-1/2 grid grid-cols-2 pr-10">
            <div className="flex justify-end">
              <div
                className="relative mb-30 bg-cover h-110 w-110 -translate-y-2/5 "
                style={{ backgroundImage: `url(${flag})` }}
              />
            </div>

            <p className="text-amber-300 text-3xl mt-2">Turn Passed </p>
          </div>
        </motion.div>
      )}

      {/* <div className="fixed w-screen h-30 bg-black opacity-70 top-1/2 -translate-y-1/2 grid grid-cols-2 pr-10"> */}
      {/*   <div className="flex justify-end"> */}
      {/*     <div */}
      {/*       className="relative mb-30 bg-cover h-110 w-110 -translate-y-2/5 " */}
      {/*       style={{ backgroundImage: `url(${flag})` }} */}
      {/*     /> */}
      {/*   </div> */}
      {/**/}
      {/*   <p className="text-amber-300 text-3xl mt-2">Turn Passed </p> */}
      {/* </div> */}
    </AnimatePresence>
  );
}
