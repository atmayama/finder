import fs from "fs";

function getFolderStructure(folderName, fillChildren, index = 0, size = 30) {
    if (fs.existsSync(folderName)) {
        if (fs.statSync(folderName).isDirectory()) {
            const dir = fs.readdirSync(folderName);
            return {
                name: folderName.split("/").splice(-1).pop(),
                type: "folder",
                sub: fillChildren ?
                    dir
                    .slice(index, index + size)
                    .map((child) =>
                        getFolderStructure(`${folderName}/${child}`, false)
                    ) :
                    [],
            };
        } else {
            return {
                name: folderName.split("/").splice(-1).pop(),
                type: "file",
            };
        }
    } else {
        return undefined;
    }
}

export { getFolderStructure };