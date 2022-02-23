import fs from "fs";

function getFolderStructure(folderName) {
    if (fs.existsSync(folderName)) {
        if (fs.statSync(folderName).isDirectory()) {
            const dir = fs.readdirSync(folderName);
            return {
                name: folderName.split("/").splice(-1).pop(),
                type: "folder",
                sub: dir.map((child) => getFolderStructure(`${folderName}/${child}`)),
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