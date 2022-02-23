// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getFolderStructure } from "../../data/fs";

export default function handler(req, res) {
    if (req.method === "GET")
        res
        .status(200)
        .json(req.query.folder ? getFolderStructure(req.query.folder) : {});
    else res.status(405);
}