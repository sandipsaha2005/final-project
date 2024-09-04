import { Box, Grid } from "lucide-react";
import React from "react";
import { Card, Typography } from "@mui/material";
import { CompareDemo } from "./Component";

const BlurClearSar = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-5 mb-5">
      <CompareDemo />
      <div className="flex text-3xl sm:text-4xl md:text-5xl justify-center items-center text-center w-full md:w-1/2 mt-5">
        <p>
          <span className="text-indigo-500 uppercase">Flux.1</span> as an Image
          <br /> Enhancement Tool
        </p>
      </div>
    </div>
  );
};

export default BlurClearSar;
