import MyRequest from "@/service/request";
export function getAllCity() {
  return MyRequest.get({
    url: "/city/all",
  });
}
