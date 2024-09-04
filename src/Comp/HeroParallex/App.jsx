"use client";
import React from "react";
import { HeroParallax } from "./ui";

export function HeroParallaxDemo() {
  return (
    <div>
      <HeroParallax products={products} />
      {/* <ul>
        {products.map((product, index) => (
          <li key={index}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export const products = [
  {
    title: "Flux1 AI Suite",
    link: "https://flux1.ai",
    thumbnail: "https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg", // Update with a relevant image
  },
  {
    title: "AI Tools Hub",
    link: "https://aitoolshub.com",
    thumbnail: "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/64f8f04ae3e006001d8d6d0b.webp", // Update with a relevant image
  },
  {
    title: "AI Innovations",
    link: "https://aiinnovations.com",
    thumbnail: "https://www.state.gov/wp-content/uploads/2021/06/AI-Motherboard-scaled.jpg", // Update with a relevant image
  },
  {
    title: "Machine Learning Pro",
    link: "https://machinelearningpro.com",
    thumbnail: "https://envisage.nz/wp-content/uploads/2023/02/coNTrolAi_cyborg_holding_a_magic_flower_romantic_pose_neon.jpg", // Update with a relevant image
  },
  {
    title: "Data Science Central",
    link: "https://datasciencecentral.com",
    thumbnail: "https://www.fujitsu.com/global/imagesgig5/ai-banner-800x450_tcm100-7204059_tcm100-6286607-32.jpg", // Update with a relevant image
  },
  {
    title: "AI for Everyone",
    link: "https://aiforeveryone.com",
    thumbnail: "https://www.elegantthemes.com/blog/wp-content/uploads/2023/06/What-is-AI-1.jpg", // Update with a relevant image
  },
  {
    title: "AI Research Lab",
    link: "https://airesearchlab.com",
    thumbnail: "https://imgv3.fotor.com/images/share/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg", // Update with a relevant image
  },
  {
    title: "Smart AI Solutions",
    link: "https://smartaisolutions.com",
    thumbnail: "https://etimg.etb2bimg.com/photo/100062546.cms", // Update with a relevant image
  },
  {
    title: "Advanced AI Tools",
    link: "https://advancedaitools.com",
    thumbnail: "https://etimg.etb2bimg.com/photo/100062546.cms", // Update with a relevant image
  },
  {
    title: "Future of AI",
    link: "https://futureofai.com",
    thumbnail: "https://cdn.sanity.io/images/tlr8oxjg/production/afce27d5dcb021422c709cb5bf60cb3a33f7376d-1456x816.png?w=3840&q=100&fit=clip&auto=format", // Update with a relevant image
  },
];
