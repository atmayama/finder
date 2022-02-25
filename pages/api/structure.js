// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getFolderStructure } from "../../data/fs";

export default function handler(req, res) {
    if (req.method === "GET") {
        console.log(req.query);
        res
            .status(200)
            .json(
                req.query.folder ?
                getFolderStructure(
                    req.query.folder,
                    true,
                    req.query.index ? Number.parseInt(req.query.index) : undefined,
                    req.query.size ? Number.parseInt(req.query.size) : undefined
                ) :
                {}
            );
    } else res.status(405);
}