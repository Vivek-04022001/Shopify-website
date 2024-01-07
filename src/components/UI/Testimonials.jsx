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
const AUTO_DELAY = ONE_SECOND * 1.25;
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
    <div className="Container relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: imgIndex * -100 + "%",
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="mx-auto flex w-[50%] cursor-grab items-center border active:cursor-grabbing "
      >
        <Images imgIndex={imgIndex} imgs={imgs} />
      </motion.div>

      {/* Add your Dots and GradientEdges components here */}
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
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
          className=" w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
        >
          <img
            src={imageUrl}
            alt={name}
            className="h-[100px] w-[100px] rounded-full object-cover "
          />
          <div>
            <h1>{description}</h1>
            <h1 className="mt-10">{name}</h1>
          </div>
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
