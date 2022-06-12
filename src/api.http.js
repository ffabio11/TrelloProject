import axios from "axios";
const url = "http://localhost:1000/app";

export const httpCreateCard = (data) => {
  const url = "https://run.mocky.io/v3/bf2bf8df-6cbc-4042-a3c4-897333af2111";
  return axios.post(url, { data });
};

export const httpGetDashboards = () => {
  return axios.get(url + "/dashboards");
};

export const httpPostContent = (idDash, data) => {
  return axios.post(url + "/" + idDash, data);
};
