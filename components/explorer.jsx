import Link from "next/link";
import FileView from "./file";
import FolderView from "./folder";

function Explorer({ data, navigate }) {
  return (
    <div className="p-5 flex flex-wrap justify-center align-middle">
      {data.sub
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
      {data.sub
        .filter(({ type }) => type === "file")
        .map((sub) => {
          return <FileView key={sub.name} file={sub} />;
        })}
    </div>
  );
}

export default Explorer;
