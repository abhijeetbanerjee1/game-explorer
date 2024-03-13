import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ae335d8ce28749a5bf5255514a19c6fb",
  },
});
