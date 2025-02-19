import { useState, useEffect } from 'react';

export function useImageHeight() {
  const [imageHeight, setImageHeight] = useState(300); 

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setImageHeight(100);
      } else if (window.innerWidth >= 1024) {
        setImageHeight(850);
      } else {
        setImageHeight(300);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return imageHeight;
}
