import React from "react";
import { Compare } from "./compares";

export function CompareDemo() {
  return (
    (<div
      className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
        <p style={{paddingBottom:'.5px'}}>What does Enhancement looks like !!</p>
      <Compare
        firstImage='./harshBlur.png'
        secondImage="./harshClear.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover" />
    </div>)
  );
}
