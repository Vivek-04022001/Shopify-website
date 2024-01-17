import React from "react";

const Iframe = () => {
  const videoUrl =
    "https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ";

//   const videoId = videoUrl.split("/").pop().split("?")[0];

  return (
    <iframe
      src={videoUrl}
      title="YouTube Video"
      className="responsive-video"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
};

export default Iframe;
