import { http } from "@/utils/http";

export const getAsyncRoutes = async () => {
  return {
    success: true,
    data: []
  };
};

export const getqueryPredict1YBQXRMS = () => {
  return http.request(
    "post",
    "/device/queryPredictPass2?measurements=1YBQXRMS"
  );
};
export const getqueryPredict1YBQYRMS = () => {
  return http.request(
    "post",
    "/device/queryPredictPass2?measurements=1YBQYRMS"
  );
};
// export const getqueryPredictPassByline2 = () => {
//   return http.request("post", "/device/queryPredictPassByline2?measurements=");
// };
export const getqueryAlert = (yujingzhis: string) => {
  return http.request("post", `/device/queryAlert?yujingzhis=${yujingzhis}`);
};

export const getqueryHealthValue = (measurements: string) => {
  return http.request(
    "post",
    `/device/queryJiankangdu?measurements=${measurements}`
  );
}