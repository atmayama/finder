import Image from "next/image";
import { imageLoader } from "../util/loader";

function FolderView({ folder }) {
  return (
    <div className="h-36 w-28 p-2 m-2 flex flex-col justify-center align-middle text-center">
      <Image
        loader={imageLoader}
        src="folder.png"
        width={100}
        height={100}
        alt="Folder Icon"
      ></Image>
      <div
        className={`font-bold overflow-clip 
      overflow-ellipsis whitespace-nowrap`}
      >
        {folder.name}
      </div>
    </div>
  );
}

export default FolderView;
