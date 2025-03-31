import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8010/api/";

export const voix = async (api, params) => {
  if (api[0] == "/" && BACKEND_URL[BACKEND_URL.length - 1] == "/") {
    api = api.substr(1);
  }

  if (typeof params == "string") {
    params = { code: params };
  } else if (typeof params == "number") {
    params = { id: params };
  }
  try {
    const response = await axios.post(BACKEND_URL + api, params);
    return response.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

