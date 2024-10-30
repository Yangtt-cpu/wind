import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

type Result = {
  success: boolean;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/get-async-routes");
};

export const getqueryPredictPass2 = () => {
  return http.request("post", "/device/queryPredictPass2?measurements=RMS");
};
