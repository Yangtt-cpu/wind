import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = async (data?: object) => {
  const { username, password } = data;
  if (!username || !password) {
    return {
      success: false,
      message: "缺少用户名或密码",
      data: {
        message: "缺少用户名或密码"
      }
    };
  }
  if (username !== "admin" || password !== "admin123") {
    return {
      success: false,
      message: "用户名或密码错误",
      data: {
        message: "用户名或密码错误"
      }
    };
  }
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  return {
    success: true,
    data: {
      username: "admin",
      roles: ["admin"],
      // 这里应该是一个 token，这里简化了
      accessToken: "xxxxxxxx",
      refreshToken: "yyyyyyyy",
      /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
      expires: expires.toLocaleString()
    }
  };
  // return http.request<UserResult>("post", baseUrlApi("login"), { data });
  // return new Promise<UserResult>((resolve, reject) => {
  //   fetch("http://149.129.72.26:3005/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       resolve(data);
  //     });
  // });
  return http.request<UserResult>("post", "/login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refresh-tok en", { data });
};
