import React from "react";
import { Compare } from "./compares";

export function CompareDemo() {
  return (
    (<div
      className="border rounded-3xl dark:bg-[#09090b] bg-neutral-100  border-neutral-200 dark:border-neutral-800">
      <Compare
        firstImage='./harshBlur.png'
        secondImage="./harshClear.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="drag" />
    </div>)
  );
}
