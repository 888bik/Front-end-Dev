import MyRequest from "./index";
export default function getHomeHotSuggest() {
  return MyRequest.get({
    url: "/home/hotSuggests",
  });
}
