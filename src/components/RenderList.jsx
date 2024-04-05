import React from "react";
import { renderToString } from "react-dom/server";

const RenderList = ({ list }) => {
  function highlightBeforeColon(inputString) {
    const parts = inputString.split(":");
    if (parts.length < 2) {
      return inputString;
    }

    const highlighted = (
      <>
        <span className="text-white p-1 mr-1 font-bold  decoration-solid">
          {parts[0]}{" "}
        </span>
        <span>: {parts[1]}</span>
      </>
    );

    return renderToString(highlighted);
  }
  return (
    <ul className="space-y-2">
    {list.map((row, index) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: `${renderToString(
              <span>{index + 1}</span>
            )} ${highlightBeforeColon(row)}`,
          }}
        />
      ))}
    </ul>
  );
};

export default RenderList;
