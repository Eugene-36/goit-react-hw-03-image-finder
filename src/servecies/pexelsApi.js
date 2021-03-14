import axios from "axios";

async function getFetch(query, page) {
  // let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
  // let key = `563492ad6f917000010000013bbd01457a39431887d74f69015c0d48`;
  let key = `19822879-41d2f6642d4c25d7fba4c0424`;

  axios.defaults.baseURL = `https://pixabay.com/api/`;
  //axios.defaults.headers.common["Authorization"] = key;
  let url = `/?query=${query}&per_page=6&page=${page}&key=${key}`;

  const response = await axios.get(url);
  const data = await response.data;
  const photos = await data.hits;
  return photos;
}

export default getFetch;
