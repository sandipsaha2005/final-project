import { Box, Grid } from "lucide-react";
import React from "react";
import { Card, Typography } from "@mui/material";
import { CompareDemo } from "./Component";

const BlurClear = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-5 mb-5">
      <div className="flex text-center text-3xl sm:text-4xl md:text-5xl justify-center items-center w-full md:w-1/2 mt-5">
        <p>
          <span className="text-indigo-500 uppercase">Flux.1</span> is an Image
          <br /> Background Removal Tool
        </p>
      </div>
      <div className="">
        <CompareDemo />
      </div>
    </div>
  );
};

export default BlurClear;
