import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { ServiceCardData } from '../public/constants';
import CardFront from './CardFront';

interface AnimatedCardProps {
  data: ServiceCardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  data,
  index,
  total,
  progress,
}) => {
  const spreadOffset = (index - (total - 1) / 2) * 340;

  const x = useTransform(progress, [0, 0.6], [0, spreadOffset]);

  // ✅ translateZ instead of z
  const translateZ = useTransform(progress, [0, 0.4], [index * -20, 0]);

  const initialRotateZ = (index - (total - 1) / 2) * 8;
  const rotateZ = useTransform(progress, [0, 0.6], [initialRotateZ, 0]);

  const scale = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    [0.85, 1, 1, 0.9]
  );

  const opacity = useTransform(
    progress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        x,
        translateZ,            // ✅ supported
        rotateZ,
        scale,
        opacity,
        transformPerspective: 2000, // ✅ supported
      }}
      className="absolute w-[320px] h-[480px] cursor-pointer origin-center"
    >
      <div className="relative w-full h-full">
        <CardFront data={data} />
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
