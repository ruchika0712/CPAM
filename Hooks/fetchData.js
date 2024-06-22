import axios from "axios";

const BASE_URL = "https://chandigarhcyber.pythonanywhere.com"; // Replace with your actual Flask app URL

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const fetchBareActContest = () =>
  AxiosInstance.get("/chandigarhcyber?type=bareact");
const fetchTraining = () => AxiosInstance.get("/chandigarhcyber?type=train");
const fetchInfo = () => AxiosInstance.get("/chandigarhcyber?type=info");
const fetchForms = () => AxiosInstance.get("/chandigarhcyber?type=forms");
const fetchComparison = () =>
  AxiosInstance.get("/chandigarhcyber?type=comparison");

export default {
  fetchBareActContest,
  fetchTraining,
  fetchInfo,
  fetchForms,
  fetchComparison,
};
