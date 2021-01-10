export const __prod__ = process.env.NODE_ENV === "production";

if (!__prod__) {
  require("dotenv/config");
}

export const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "qat";
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN || "qrt";
export const REST_ENDPOINT =
  process.env.REACT_APP_BACKEND ||
  "https://quacker-devavi.herokuapp.com" ||
  "http://localhost:2608";
export const GRAPHQL_ENDPOINt = REST_ENDPOINT + "/graphql";

export const LOCAL_THEME = "lt";
