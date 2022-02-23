import Image from "next/image";
import { imageLoader } from "../util/loader";

function FileView({ file }) {
  return (
    <div className="h-36 w-28 p-2 m-2 flex flex-col justify-center align-middle text-center">
      <Image
        loader={imageLoader}
        src="file.png"
        width={100}
        height={100}
        alt="File Icon"
      ></Image>
      <div className="font-light overflow-clip whitespace-nowrap hover:overflow-x-visible hover:shadow-2xl">
        {file.name}
      </div>
    </div>
  );
}

export default FileView;
