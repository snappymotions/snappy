import { useScroll, motion, useTransform } from 'framer-motion';

 const ProgressBar = ({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const step = 1 / total;

  const backgroundColor = useTransform(
    progress,
    [index * step, (index + 1) * step],
    ["#222", "#f97316"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="w-16 h-[2px] rounded-full"
    />
  );
};

export default ProgressBar;