import { useEffect, useState, useCallback } from "react";
import FileView from "./file";
import FolderView from "./folder";

function Explorer({ data, index, navigate, next, previous }) {
  return (
    <div
      className="h-full
    flex flex-col justify-between     flex-grow flex-shrink-0 "
    >
      <div
        className="p-5 
      flex-grow flex-shrink-0 m-auto
      flex flex-wrap justify-center align-middle"
      >
        {data?.sub
          .filter(({ type }) => type === "folder")
          .map((sub) => {
            return (
              <button
                key={sub.name}
                onDoubleClick={navigate(`${sub.name}`)}
                onTouchEnd={navigate(`${sub.name}`)}
              >
                <FolderView folder={sub} />
              </button>
            );
          })}
        {data?.sub
          .filter(({ type }) => type === "file")
          .map((sub) => {
            return <FileView key={sub.name} file={sub} />;
          })}
      </div>
      <div
        className="flex-shrink flex-grow-0
      flex justify-around "
      >
        <button
          className="font-thin text-2xl disabled:opacity-20"
          onClick={previous}
          disabled={index == 0}
        >
          {"<"}
        </button>
        <p>{index / 30 + 1}</p>
        <button
          className="font-thin text-2xl disabled:opacity-20 "
          onClick={next}
          disabled={data?.sub.length < 30}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Explorer;
