import { getJson } from "./axios";
import { URL_QUESTION } from "./endpoint";

export function getQuestion() {
  return getJson(URL_QUESTION, null);
}
