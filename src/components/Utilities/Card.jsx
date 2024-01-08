import React from 'react'

const Card = (data) => {
    const { title, description, imageUrl } = data;
    return (
      <div className="w-[20%] rounded overflow-hidden bg-white px-4 py-4">
        <img className={imageUrl} src={imageUrl} alt="Product" />
        <div className="mt-4">
          <div className="font-bold text-2xl mb-2 text-black">{title}</div>
          <p className="text-primary ">{description}</p>
        </div>
        <div className="mt-2">
          {/* <span className="text-black">${price}</span> */}
        </div>
      </div>
    );
  };

export default Card