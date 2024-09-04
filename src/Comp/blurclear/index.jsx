import { Box, Grid } from "lucide-react";
import React from "react";
import { Card ,Typography} from "@mui/material";
import { CompareDemo } from "./Component";
const BlurClear = () => {
  return (
    <div style={{ display: "flex",justifyContent:'space-evenly',marginTop:'20px',marginBottom:'20px',flexWrap:'wrap',backgroundColor:'black'}}>

      <div>
        <p style={{fontSize:'40px'}}>Flux is an Image <br /> Enhancement Tool</p>
        
      </div>
     
      <CompareDemo />
    </div>
    // <CompareDemo/>
  );
};

export default BlurClear;
