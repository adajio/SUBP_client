import axios from "axios";

const SQL_URL = "http://127.0.0.1:8011/api/sql";

export const sql = async function (props) {
  const response = await axios.post(SQL_URL, props);
  return response.data?.data;
};

export const all = async function (sql, params) {
  const props = {
    all: sql,
    params,
  };

  const response = await axios.post(SQL_URL, props);
  return response.data?.data;
};

export const get = async function (sql, params) {
  const props = {
    get: sql,
    params,
  };

  const response = await axios.post(SQL_URL, props);
  return response.data?.data;
};