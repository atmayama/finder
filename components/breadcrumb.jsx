function BreadCrumb({ path, goTo }) {
  return (
    <div className="p-5 flex flex-wrap">
      {path.split("/").map((route, index, arr) => (
        <div className="inline m-2 cursor-pointer" key={index}>
          <div
            className="inline p-1 m-2 bg-slate-600 rounded-md"
            onClick={() => {
              goTo(arr.slice(0, index + 1).join("/"));
            }}
          >
            {route}
          </div>
          {" > "}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumb;
