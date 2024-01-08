import "../styles/hero.css";
import YouTube from "react-youtube";
const Hero = () => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      loop:1,
      controls:0,
     
    },
  };
  const videoUrl =
    "https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ";

  const videoId = videoUrl.split("/").pop().split("?")[0];

  const onEnd = (event) => {
    // Event triggered when the video ends
    event.target.seekTo(0); // Seek back to the start of the video
  };

  return (
    <section className="'hero__section" id="home">
      <div className="Container">
        <div className="flex flex-col justify-center md:flex-row md:items-start  md:justify-between ">
          {/* hero-heading */}
          <div className="w-full text-left md:w-1/2">
            <div className="heading heading-lg space-y-2">
              <h2 className="highlight">Shopify Mega Bundle</h2>
              <h2>The Only Bundle You'll Ever Need</h2>
            </div>
            <p className="text-md mt-8 w-[100%] text-slate-300">
              Introducing the "Shopify Mega Bundle": A comprehensive solution
              for dropshipping success and opening up additional income
              opportunities.
            </p>
          </div>

          <div className=" mt-10 flex w-full flex-col overflow-hidden border border-black md:mt-0 md:w-1/2">
            {/* <iframe
              className="aspect-video"
              src="https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ"
              title="YouTube video player"
              // frameborder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe> */}
            <YouTube
              videoId={videoId} // Extract the video ID from the URL
              opts={videoOpts}
              className="responsive-video"
              onEnd={onEnd}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
