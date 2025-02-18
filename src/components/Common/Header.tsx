'use client';

import Image from 'next/image';
import { Navbar } from '@/components/Common/Navbar';

export function Header({ imageHeight }:{imageHeight:any}) {
  return (
    <div className='relative overflow-visible' >
        <Image 
          src="/images/HomeScreenImages/GradiantImage.png"
          alt="Header Image"
          width={300}
          height={300}
          objectFit="cover"
          className="absolute w-full"
          style={{
            height: imageHeight 
          }}
        />
        <div className="relative">
        <Navbar />
        </div>
    </div>
  );
}
