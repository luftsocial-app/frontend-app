'use client';

import Image from 'next/image';
import { Navbar } from '@/components/Common/Navbar';
import { useImageHeight } from '@/hooks/useImageHeight';

export function Header({className}:{className:string}) {
  const imageHeight = useImageHeight();

  return (
    <div className="relative overflow-visible">
      <Image
        src="/images/HomeScreenImages/GradiantImage.png"
        alt="Header Image"
        width={300}
        height={300}
        objectFit="cover"
        className={`absolute w-full ${className}`}
      />
      <div className="relative">
        <Navbar />
      </div>
    </div>
  );
}
