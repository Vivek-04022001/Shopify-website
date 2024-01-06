import "../styles/hero.css";
import YouTube from "react-youtube";
const Hero = () => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };
  const videoUrl =
    "https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ";

    const videoId = videoUrl.split('/').pop().split('?')[0];

  return (
    <section className="'hero__section" id="home">
      <div className="Container">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between ">
          {/* hero-heading */}
          <div className="w-full md:w-1/2 text-left">
            <div className="space-y-2 heading heading-lg">
              <h2>We 're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className=" text-primary">Promote Your Brand</h2>
            </div>
            <p className="mt-16 text-md w-[80%] text-smallText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quis optio reprehenderit. Officiis, adipisci iusto!
            </p>

            <div className="hidden md:flex w-full items-center gap-10  mt-10">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="w-full md:mt-0 mt-10 md:w-1/2 flex flex-col  overflow-hidden ">
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
            />
            <div className="flex md:hidden w-full items-center justify-between  mt-16 px-8">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
