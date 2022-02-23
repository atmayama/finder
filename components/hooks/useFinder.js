import { JSONPath } from "jsonpath-plus";
import { useState, useEffect, useCallback } from "react";

function plusPathFromPath(path) {
    return (
        path
        .split("/")
        .splice(1)
        .map((name) => `sub[?(@.name==='${name}')].`)
        .join("") || "$"
    );
}

function useFinder(root) {
    const [path, setPath] = useState(`${root?.name}`);
    const [data, setData] = useState(root);

    useEffect(() => {
        const newData = JSONPath({
            json: root,
            path: plusPathFromPath(path),
            wrap: true,
        });
        setData(newData[0]);
    }, [root, path]);

    const navigate = useCallback(
        (folder) => {
            return () => {
                setPath(`${path}/${folder}`);
            };
        }, [path]
    );

    const goTo = useCallback((newPath) => {
        setPath(newPath);
    }, []);

    return [data, path, navigate, goTo];
}

export default useFinder;