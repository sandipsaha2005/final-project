import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from 'prop-types';

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="AI Boyfriend"
          subheading="Virtual companion using AI."
          imgSrc="https://cdn.miniapps.ai/images/tools/ca483d1c-393f-4598-8d8c-38e3298fef68.png"
          href="#"
        />
        <Link
          heading="Video Enhancer App"
          subheading="Improves video quality automatically"
          imgSrc="https://play-lh.googleusercontent.com/1uiNaHI1jp0YNwrHr8UeeoVISnYciBGdidUM-qSaXcf1eiqmUYEJ32VK0rfoE-b2-rs"
          href="#"
        />
        <Link
          heading="AI Album Cover Generator"
          subheading="Creates custom album covers."
          imgSrc="https://i.pinimg.com/originals/af/9b/19/af9b192ffd9c306555e557e5fcd5f940.jpg"
          href="#"
        />
        <Link
          heading="AI Image Extender"
          subheading="Expands image dimensions intelligently."
          imgSrc="https://i.pinimg.com/736x/81/20/6c/81206c92096a3600271e8c8f1e6e39e8.jpg"
          href="#"
        />
        <Link
          heading="AI Profile Picture Generator"
          subheading="Generates personalized profile images."
          imgSrc="https://i.pinimg.com/originals/58/c6/91/58c691bbc5b3be76e78de75e7bff5371.png"
          href="#"
        />
        <Link
          heading="Uncensored AI Image Generator"
          subheading="Produces unrestricted AI-generated images."
          imgSrc="https://i.pinimg.com/736x/92/b2/b3/92b2b3e683055263133ec539fcc519d0.jpg"
          href="#"
        />
        <Link
          heading="AI Face Generator"
          subheading="Generates realistic AI faces."
          imgSrc="https://i.pinimg.com/originals/7e/ae/52/7eae52b4664b52bda258139fd9cbcdd2.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-3xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

Link.propTypes = {
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  href: PropTypes.string,
};
