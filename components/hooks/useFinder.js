import { JSONPath } from "jsonpath-plus";
import { useState, useEffect, useCallback } from "react";
import { getFolders } from "../../fetch/folders";

function plusPathFromPath(path) {
    return (
        path
        .split("/")
        .splice(1)
        .map((name) => `sub[?(@.name==='${name}')].`)
        .join("") || "$"
    );
}

function useFinder(basePath) {
    const [path, setPath] = useState(basePath);
    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getFolders(path, index, 30).then(setData);
        // const newData = JSONPath({
        //     json: root,
        //     path: plusPathFromPath(path),
        //     wrap: true,
        // });
        // setData(newData[0]);
    }, [path, index]);

    const navigate = useCallback(
        (folder) => {
            return () => {
                setPath(`${path}/${folder}`);
                setIndex(0);
            };
        }, [path]
    );

    const goTo = useCallback((newPath) => {
        setPath(newPath);
        setIndex(0);
    }, []);

    const next = useCallback(() => {
        setIndex(index + 30);
    }, [index]);

    const previous = useCallback(() => {
        index > 0 && setIndex(index - 30);
    }, [index]);

    return [data, path, index, navigate, goTo, next, previous];
}

export default useFinder;