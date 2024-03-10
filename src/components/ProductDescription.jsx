import React from "react";
import RenderList from "./RenderList";

const ProductDescription = ({ name, description }) => {
  return (
    <div className="w-full px-4 md:w-1/2 flex flex-col  text-white/80">
      <div className="flex flex-col gap-2 px-2 gap-y-4">
        <h1 className="md:text-5xl text-4xl font-bold text-white ">
          {description.h1_title}
        </h1>

        <h2 className="font-bold semi-bold text-xl ">{description.h2_title}</h2>

        <h3 className="underline underline-offset-4 mt-6">
          {description.h3_title1}
        </h3>
        <RenderList list={description.h3_list1} />

        <h3 className="underline underline-offset-4 mt-6">
          {description.h3_title2}
        </h3>
        <RenderList list={description.h3_list2} />

        {description.h3_title3 && (
          <>
            <h3 className="underline underline-offset-4 mt-6">
              {description.h3_title3}
            </h3>
            <p className="italic text-lg leading-tight">
              {description.h3_description3}
            </p>
          </>
        )}

        <h3 className="underline underline-offset-4 mt-6">
          {description.h3_title4}
        </h3>
        <p className="italic text-lg leading-tight">
          {description.h3_description4}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
