import axios from "axios";

async function getFolders(folder, index, size) {
    return axios
        .get(
            `/api/structure?folder=${folder}${index ? `&index=${index}` : ""}${
        size ? `&size=${size}` : ""
      }`
    )
    .then((res) => res.data)
    .catch((err) => err.message);
}

export { getFolders };