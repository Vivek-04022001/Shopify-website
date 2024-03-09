import { useState } from "react";
import "../styles/hero.css";
import thumbnail from "../../assets/video_thumbnail.png";
import thumbnail_small from "../../assets/video_thumbnail_small.png";
import LazyImg from "../LazyImg";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videoUrl =
    "https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ";

  return (
    <section className="'hero__section" id="home">
      <div className="Container">
        <div className="flex flex-col justify-center md:flex-row md:items-start  md:justify-between ">
          {/* hero-heading */}
          <div className="w-full text-left md:w-1/2">
            <div className="heading heading-lg space-y-2">
              <h2 className="highlight">Shopify Mega Bundle</h2>
              <p>The Only Bundle You'll Ever Need</p>
            </div>
            <p className="text-md mt-8 w-[100%] text-slate-300">
              Introducing the "Shopify Mega Bundle": A comprehensive solution
              for dropshipping success and opening up additional income
              opportunities.
            </p>
          </div>

          <div className=" mt-10  md:p-0 flex w-full flex-col overflow-hidden border border-black md:mt-0 md:w-1/2">
            {showVideo ? (
              <iframe
                src={videoUrl}
                title="YouTube Video"
                className="responsive-video"
                allow="autoplay; encrypted-media"
                loading="lazy"
                allowFullScreen
              ></iframe>
            ) : (
              <LazyImg
                imageUrl={thumbnail}
                imageUrlsmall={thumbnail_small}
                className="cursor-pointer"
                onClick={() => setShowVideo(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
