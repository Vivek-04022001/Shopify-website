import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import aryansingh from "../../assets/testimonials/Aryan-Singh.jpg";
import radhikajoshi from "../../assets/testimonials/Radhika-Joshi.jpg";
import rahulmehta from "../../assets/testimonials/Rahul-Mehta.jpg";
import riyaverma from "../../assets/testimonials/Riya-Verma.jpg";
import rohanmandora from "../../assets/testimonials/Rohan-Mandora.jpg";
import vikramverma from "../../assets/testimonials/Vikram-Verma.jpg";
const imgs = [
  {
    id: 1,
    name: "Radhika Joshi",
    description:
      "Using the dropshipping calculation tool feels like having a business buddy who just gets it. And those Shopify themes They've given my store a whole new vibe. Couldn't be happier with the results!",
    imageUrl: radhikajoshi, // Replace 'aryansingh' with the actual image URL
  },
  {
    id: 2,
    name: "Rohan Mandora",
    description:
      "Facebook Ad Hacks sharpens my ad game, Dropshipping Mastery Course is my business guide, and Canva Templates streamline my design. It's a go-to toolkit for serious online sellers.",
    imageUrl: rohanmandora, // Replace 'rohanmandora' with the actual image URL
  },
  {
    id: 3,
    name: "Aryan Singh",
    description:
      "Instagram Stories library is my go-to for standout posts. With 8000+ motion graphics, my content shines! And the Instagram Mastery Course? It's the boost every Instagrammer needs. Game-changer.",
    imageUrl: aryansingh, // Replace 'aryansingh' with the actual image URL
  },
  {
    id: 4,
    name: "Riya Verma",
    description:
      "No jargon, just genuine help. The product sheet is my go-to advisor and the Instagram Mastery Course? It's like a social media hack taught by a friend. Real tools, real growth, and a dash of good vibes – what more could you ask for?",
    imageUrl: riyaverma, // Replace 'riyaverma' with the actual image URL
  },
  {
    id: 5,
    name: "Rahul Mehta",
    description:
      "After Sales Calculation Sheet is my financial guide, and the Social Media Pack enhances my online presence. It's a practical toolkit that truly makes a difference for digital entrepreneurs.",
    imageUrl: rahulmehta, // Replace 'rahulmehta' with the actual image URL
  },
  {
    id: 6,
    name: "Vikram Verma",
    description:
      "The product sheet keeps my business strategies on point, and the 8000+ Instagram Stories? They're my toolkit for engaging storytelling. It's practical, versatile, and a game-changer for my digital journey.",
    imageUrl: vikramverma, // Replace 'vikramverma' with the actual image URL
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="Container relative overflow-hidden  py-8 " id="testimonial">
      <div class="absolute left-0 top-0 z-10  h-full w-1/4 bg-gradient-to-l from-transparent from-10% to-black to-100%"></div>
      <div class="absolute right-0 top-0 z-10 h-full w-1/4 bg-gradient-to-l from-black from-10% to-transparent to-100% "></div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        // style={{
        //   x: imgIndex * -100 + "%",
        // }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="mx-auto flex w-[70%]  cursor-grab items-center  active:cursor-grabbing "
      >
        <Images imgIndex={imgIndex} imgs={imgs} />
      </motion.div>

      {/* Add your Dots and GradientEdges components here */}
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex, imgs }) => {
  const SPRING_OPTIONS = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <>
      {imgs.map(({ name, description, imageUrl, id }, idx) => (
        <motion.div
          key={id}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className=" w-full shrink-0  rounded-lg   object-cover border border-gray-500 px-8 py-3 bg-gradient-to-br from-secondary from-20% to-90% to-black"
        >
          <svg
            className="mx-auto mb-3 h-6 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-lg  text-white">{description}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <img
              className="h-6 w-6 rounded-full"
              src={imageUrl}
              alt={imageUrl}
            />
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                {name}
              </div>
            </div>
          </figcaption>
        </motion.div>
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default SwipeCarousel;
