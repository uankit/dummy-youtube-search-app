import axios from "axios";

const KEY = "AIzaSyC7eh1S37BOH55iRpkvNJeGHJytmVnnuxU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
