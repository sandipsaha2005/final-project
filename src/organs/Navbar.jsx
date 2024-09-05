import React from "react";
import { useEffect, useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Nav from "../Comp/NavBar/app";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";
import { RevealLinks } from "../Comp/newNav/app";
import { useMediaQuery } from "@mui/material";
function NavbarDemo() {
  const [rotation, setRotation] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
    <div className="bg-transparent absolute top-5 left-5 z-[500]  text-indigo-500 text-xl">FLUX.1</div>
    <div className="z-[100]  fixed top-5 right-5 ">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{
                width: isMobile ? "80%" : "60%",  // Apply different width for mobile
                height: isMobile ? "80px" : "40px", // Apply different height for mobile
              }}>
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/eouimtlu.json"
              trigger="loop-on-hover"
              colors="primary:#f2e8dc"
style={{height:'full',width:'full'}}
            ></lord-icon>
            {/* <WidgetsIcon
              className="icon"
              fontSize="large"
              sx={{ color: "#f2e8dc" }}
            />{" "} */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ backgroundColor: "black", width: "100%",height:'100%' }}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingLeft: "25px",
                paddingTop: "20px",
                backgroundColor: "#0073cc",
              }}
              // onClick={toggleDrawer(anchor, false)}
            >
              {/* <CloseIcon
                fontSize="large"
                onClick={toggleDrawer(anchor, false)}
                sx={{
                  "&:hover": { animation: `${rotate} 2s linear infinite` },
                  color: "black",
                }}
              /> */}

              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="loop-on-hover"
                delay="100"
                state="hover-cross-2"
                colors="primary:#000000"
                style={{ width: "200px", height: "50px" }}
                onClick={toggleDrawer(anchor, false)}
              ></lord-icon>
            </Button>
            <RevealLinks />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}

export default NavbarDemo;
