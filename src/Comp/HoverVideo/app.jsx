import { cn } from '../../utils/cn'
import React from 'react';
import { TextHoverEffectDemo } from '../text-flex/app';
export function CardDemo() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div
        className={cn(
          "group w-full h-full cursor-pointer overflow-hidden relative shadow-xl flex flex-col justify-end p-8 border border-transparent ",
          "bg-[url('https://i.redd.it/t0wy8vulvyua1.jpg')] bg-cover bg-center",
          "before:bg-[url('https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/04/AI-video-of-woman-in-futuristic-environment.gif')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url('https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/04/AI-video-of-woman-in-futuristic-environment.gif')]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <TextHoverEffectDemo/>
        </div>
      </div>
    </div>
  );
}
