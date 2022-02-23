import axios from "axios";

async function getFolders(folder) {
    return axios
        .get(`/api/structure?folder=${folder}`)
        .then((res) => res.data)
        .catch((err) => err.message);
}

export { getFolders };