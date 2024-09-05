"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "./Ui";
import { useState } from "react";
import { useEffect } from "react";
import { ThreeDCardDemo } from "../threeDCard/index2";
export function PlaceholdersAndVanishInputDemo() {
  const [inputText, setInputText] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const token = "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";

  const generateImage = async () => {
    const query = async (data) => {
      setLoader(true);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        // "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      console.log(response);

      const result = await response.blob();
      return result;
    };

    try {
      const userText = inputText; // Replace with user input if needed
      const imageBlob = await query({ inputs: userText });

      // Create a URL for the blob and set it in the state
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageURL(imageObjectURL);
    } catch (error) {
      console.error("Error generating image:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (imageURL) {
      setLoader(false);
    }
  }, [imageURL]);

  const placeholders = [
    "Search for AI-generated images...",
    "What does a futuristic city look like?",
    "Find the perfect design for your project...",
    "How would a robot revolution appear?",
    "Explore AI art and visuals...",
  ];

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submitted");
  // };
  return (
    <div className="h-[40rem] w-full flex flex-col justify-center  items-center px-4 dark:bg-[#09090b]">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Enter Whatever You want to see
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={generateImage}
      />
      <div
        className="h-[40rem] w-full flex  justify-center  items-center px-4 dark:bg-[#0B0B0F] border-blue-500"
        style={{
          marginTop:'10px',
          display: "flex",
          justifyContent: "center",
          // maxHeight: "500px",
          alignItems: "center",
          width:'100%',
          maxWidth:'500px',
          height:'90%',
          // border:'2px solid red'
        }}
      >
        {loader ? (
          <>
            {" "}
            <img
              src={"./loader.gif"}
              alt=""
              height='100%'
              width='100%'
              className="object-cover  "
            />{" "}
          </>
        ) : (
          // <ThreeDCardDemo title={'Taking'} src={imageURL ? imageURL : './cow.jpeg'} />
          <img
         
            src={imageURL ? imageURL : "./Search_first.png"}
            alt=""
             className="object-cover w-full h-full rounded-md"
          />
          
        )}
      </div>
    </div>
  );
}
