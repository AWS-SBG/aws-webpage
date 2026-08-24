import { motion } from "motion/react";
import imgUmAws11 from "./928df293123cc664a4d68c71b80294b486382868.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <motion.div className="absolute left-[-85px] size-[1080px] top-[-135px]" data-name="UM AWS (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUmAws11} />
      </motion.div>
    </div>
  );
}