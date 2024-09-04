import { Box, Grid } from "lucide-react";
import React from "react";
import { Card ,Typography} from "@mui/material";
import { CompareDemo } from "./Component";
const BlurClearSar = () => {
  return (
    <div style={{ display: "flex",justifyContent:'space-evenly',marginTop:'20px',marginBottom:'20px',flexWrap:'wrap',backgroundColor:'black'}}>

      
     
      <CompareDemo />
      <div style={{paddingTop:'50px'}}>
        <p style={{fontSize:'40px'}}>Flux is an Image <br /> Enhancement Tool</p>
        
      </div>
    </div>
    // <CompareDemo/>
  );
};

export default BlurClearSar;
