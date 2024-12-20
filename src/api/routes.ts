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
<<<<<<< HEAD
=======
export const getqueryPredict1YBQYRMS = () => {
  return http.request(
    "post",
    "/device/queryPredictPass2?measurements=1YBQYRMS"
  );
};
export const getqueryPredict4YBQXRMS = () => {
  return http.request(
    "post",
    "/device/queryPredictPass2?measurements=4YBQXRMS"
  );
};
export const getqueryPredict4YBQYRMS = () => {
  return http.request(
    "post",
    "/device/queryPredictPass2?measurements=4YBQYRMS"
  );
};

export const getqueryPredictRMS = (measurements: string) => {
  return http.request(
    "post",
    `/device/queryPredictPass2?measurements=${measurements}`
  );
};

>>>>>>> main
// export const getqueryPredictPassByline2 = () => {
//   return http.request("post", "/device/queryPredictPassByline2?measurements=");
// };
export const getqueryAlert = () => {
  return http.request("post", "/device/queryAlert?yujingzhis=alert");
};
