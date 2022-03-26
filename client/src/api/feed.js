import { getJson } from "./axios";
import { URL_FEED, URL_MORE_FEED } from "./endpoint";

export function getFeed() {
  return getJson(URL_FEED, null);
}

export function getMoreRec(param) {
  return getJson(URL_MORE_FEED, param);
}
