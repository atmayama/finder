import BreadCrumb from "./breadcrumb";
import Explorer from "./explorer";
import useFinder from "./hooks/useFinder";

function Finder({ path }) {
  const [data, currentPath, index, navigate, goTo, next, previous] =
    useFinder(path);

  return (
    <div className="min-h-screen w-screen flex-grow flex flex-col">
      <div className="flex-shrink flex-grow-0">
        <BreadCrumb path={currentPath} goTo={goTo} />
      </div>
      <div className="flex-grow flex-shrink-0">
        <Explorer
          data={data}
          index={index}
          navigate={navigate}
          next={next}
          previous={previous}
        />
      </div>
    </div>
  );
}

export default Finder;
