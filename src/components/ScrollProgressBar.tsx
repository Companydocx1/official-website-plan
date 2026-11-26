import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number | null = null;

    const calculateProgress = () => {
      frameId = null;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollableHeight = doc.scrollHeight - doc.clientHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      const ratio = Math.min(1, Math.max(0, scrollTop / scrollableHeight));
      setProgress(ratio);
    };

    const handleScrollOrResize = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(calculateProgress);
    };

    calculateProgress();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[45] h-[3px] pointer-events-none bg-transparent"
    >
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-[#A88319] via-[#C9A227] to-[#F3DE8A] shadow-[0_0_8px_rgba(201,162,39,0.5)] will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
