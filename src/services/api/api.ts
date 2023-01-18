import { ApisauceInstance, create } from "apisauce";

import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config";

export class API {
  static apisauce: ApisauceInstance;

  static setup(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.apisauce = create({
      baseURL: config.url,
      timeout: config.timeout,
      headers: {
        Accept: "application/json",
        "content-type": "application/json; charset=utf-8",
      },
    });
  }

  static call<T extends (apisauce: ApisauceInstance) => any>(
    endpoint: T
  ): ReturnType<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return endpoint(this.apisauce);
  }
}

API.setup();
