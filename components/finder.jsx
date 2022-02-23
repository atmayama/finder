import BreadCrumb from "./breadcrumb";
import Explorer from "./explorer";
import useFinder from "./hooks/useFinder";

function Finder({ root }) {
  const [data, path, navigate, goTo] = useFinder(root);
  return (
    <div className="min-h-screen w-screen flex-grow flex flex-col">
      <div className="flex-shrink flex-grow-0">
        <BreadCrumb path={path} goTo={goTo} />
      </div>
      <div className="flex-grow flex-shrink-0">
        <Explorer data={data} navigate={navigate} />
      </div>
    </div>
  );
}

export default Finder;
