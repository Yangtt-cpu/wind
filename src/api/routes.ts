import { http } from "@/utils/http";

export const getAsyncRoutes = async () => {
  return {
    success: true,
    data: []
  };
};

export const getqueryPredictPass2 = () => {
  return http.request("post", "/device/queryPredictPass2?measurements=RMS");
};
// export const getqueryPredictPassByline2 = () => {
//   return http.request("post", "/device/queryPredictPassByline2?measurements=");
// };
export const getqueryAlert = () => {
  return http.request("post", "/device/queryAlert?yujingzhis=alert");
};
