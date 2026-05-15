"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function ClientLoader({ children }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 10;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && <Loader progress={progress} />}
      {children}
    </>
  );
}