/* tslint:disable */
/* eslint-disable */
/**
 * Delivery Sevice
 * A private delivery service company in Cologne handles the collection and delivery of parcels for people.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: islamghany3@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "./common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "./base";

/**
 *
 * @export
 * @interface AuthenticateUser
 */
export interface AuthenticateUser {
  /**
   *
   * @type {string}
   * @memberof AuthenticateUser
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticateUser
   */
  password?: string;
}
/**
 *
 * @export
 * @interface AuthenticateUserResponse
 */
export interface AuthenticateUserResponse {
  /**
   *
   * @type {AuthenticateUserResponseUser}
   * @memberof AuthenticateUserResponse
   */
  user: AuthenticateUserResponseUser;
  /**
   *
   * @type {string}
   * @memberof AuthenticateUserResponse
   */
  token: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticateUserResponse
   */
  type: AuthenticateUserResponseTypeEnum;
}

export const AuthenticateUserResponseTypeEnum = {
  Biker: "biker",
  Sender: "sender",
} as const;

export type AuthenticateUserResponseTypeEnum =
  (typeof AuthenticateUserResponseTypeEnum)[keyof typeof AuthenticateUserResponseTypeEnum];

/**
 * @type AuthenticateUserResponseUser
 * @export
 */
export type AuthenticateUserResponseUser = Biker | Sender;

/**
 *
 * @export
 * @interface Biker
 */
export interface Biker {
  /**
   *
   * @type {number}
   * @memberof Biker
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Biker
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Biker
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Biker
   */
  password: string;
}
/**
 *
 * @export
 * @interface ClaimOrderRequest
 */
export interface ClaimOrderRequest {
  /**
   *
   * @type {string}
   * @memberof ClaimOrderRequest
   */
  picked_up_at?: string;
}
/**
 * data required for create an order
 * @export
 * @interface CreateOrder
 */
export interface CreateOrder {
  /**
   *
   * @type {number}
   * @memberof CreateOrder
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof CreateOrder
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrder
   */
  pick_up_address: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrder
   */
  delivery_address: string;
}
/**
 *
 * @export
 * @interface CreateOrderRequest
 */
export interface CreateOrderRequest {
  /**
   *
   * @type {number}
   * @memberof CreateOrderRequest
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof CreateOrderRequest
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrderRequest
   */
  pick_up_address: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrderRequest
   */
  delivery_address: string;
}
/**
 *
 * @export
 * @interface CreateUser
 */
export interface CreateUser {
  /**
   *
   * @type {string}
   * @memberof CreateUser
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof CreateUser
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof CreateUser
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof CreateUser
   */
  password?: string;
}
/**
 *
 * @export
 * @interface DeliverOrderRequest
 */
export interface DeliverOrderRequest {
  /**
   *
   * @type {string}
   * @memberof DeliverOrderRequest
   */
  delivered_at?: string;
}
/**
 * Server Error
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   *
   * @type {string}
   * @memberof ErrorResponse
   */
  message?: string;
}
/**
 * @type GetCurrentUser201Response
 * @export
 */
export type GetCurrentUser201Response =
  | GetCurrentUser201ResponseOneOf
  | GetCurrentUser201ResponseOneOf1;

/**
 *
 * @export
 * @interface GetCurrentUser201ResponseOneOf
 */
export interface GetCurrentUser201ResponseOneOf {
  /**
   *
   * @type {string}
   * @memberof GetCurrentUser201ResponseOneOf
   */
  type?: GetCurrentUser201ResponseOneOfTypeEnum;
  /**
   *
   * @type {Biker}
   * @memberof GetCurrentUser201ResponseOneOf
   */
  user?: Biker;
}

export const GetCurrentUser201ResponseOneOfTypeEnum = {
  Biker: "biker",
  Sender: "sender",
} as const;

export type GetCurrentUser201ResponseOneOfTypeEnum =
  (typeof GetCurrentUser201ResponseOneOfTypeEnum)[keyof typeof GetCurrentUser201ResponseOneOfTypeEnum];

/**
 *
 * @export
 * @interface GetCurrentUser201ResponseOneOf1
 */
export interface GetCurrentUser201ResponseOneOf1 {
  /**
   *
   * @type {string}
   * @memberof GetCurrentUser201ResponseOneOf1
   */
  type?: GetCurrentUser201ResponseOneOf1TypeEnum;
  /**
   *
   * @type {Sender}
   * @memberof GetCurrentUser201ResponseOneOf1
   */
  user?: Sender;
}

export const GetCurrentUser201ResponseOneOf1TypeEnum = {
  Biker: "biker",
  Sender: "sender",
} as const;

export type GetCurrentUser201ResponseOneOf1TypeEnum =
  (typeof GetCurrentUser201ResponseOneOf1TypeEnum)[keyof typeof GetCurrentUser201ResponseOneOf1TypeEnum];

/**
 * model containg the order schema
 * @export
 * @interface Order
 */
export interface Order {
  /**
   *
   * @type {number}
   * @memberof Order
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  pick_up_address: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  delivery_address: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  delivered_at?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  picked_up_at?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  status?: OrderStatusEnum;
}

export const OrderStatusEnum = {
  Idle: "idle",
  InProcess: "in_process",
  Delivered: "delivered",
} as const;

export type OrderStatusEnum =
  (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum];

/**
 *
 * @export
 * @interface Sender
 */
export interface Sender {
  /**
   *
   * @type {number}
   * @memberof Sender
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Sender
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Sender
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Sender
   */
  password: string;
}
/**
 *
 * @export
 * @interface SigninSinder400Response
 */
export interface SigninSinder400Response {
  /**
   *
   * @type {string}
   * @memberof SigninSinder400Response
   */
  message?: string;
}
/**
 * success operation
 * @export
 * @interface SuccessResponse
 */
export interface SuccessResponse {
  /**
   *
   * @type {string}
   * @memberof SuccessResponse
   */
  messgae?: string;
}

/**
 * BikersApi - axios parameter creator
 * @export
 */
export const BikersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Biker login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signinBiker: async (
      authenticateUser?: AuthenticateUser,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/biker/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        authenticateUser,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * BikersApi - functional programming interface
 * @export
 */
export const BikersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = BikersApiAxiosParamCreator(configuration);
  return {
    /**
     * Biker login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async signinBiker(
      authenticateUser?: AuthenticateUser,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AuthenticateUserResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.signinBiker(
        authenticateUser,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * BikersApi - factory interface
 * @export
 */
export const BikersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = BikersApiFp(configuration);
  return {
    /**
     * Biker login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signinBiker(
      authenticateUser?: AuthenticateUser,
      options?: any
    ): AxiosPromise<AuthenticateUserResponse> {
      return localVarFp
        .signinBiker(authenticateUser, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * BikersApi - object-oriented interface
 * @export
 * @class BikersApi
 * @extends {BaseAPI}
 */
export class BikersApi extends BaseAPI {
  /**
   * Biker login
   * @param {AuthenticateUser} [authenticateUser]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BikersApi
   */
  public signinBiker(
    authenticateUser?: AuthenticateUser,
    options?: AxiosRequestConfig
  ) {
    return BikersApiFp(this.configuration)
      .signinBiker(authenticateUser, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * OrdersApi - axios parameter creator
 * @export
 */
export const OrdersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * claim an order
     * @param {number} id the id of the order
     * @param {ClaimOrderRequest} [claimOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    claimOrder: async (
      id: number,
      claimOrderRequest?: ClaimOrderRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("claimOrder", "id", id);
      const localVarPath = `/orders/{id}/claim`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PATCH",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        claimOrderRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create New Order
     * @param {CreateOrderRequest} createOrderRequest create order data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOrder: async (
      createOrderRequest: CreateOrderRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createOrderRequest' is not null or undefined
      assertParamExists(
        "createOrder",
        "createOrderRequest",
        createOrderRequest
      );
      const localVarPath = `/orders`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        createOrderRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * deliver an order
     * @param {number} id the id of the order
     * @param {DeliverOrderRequest} [deliverOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deliverOrder: async (
      id: number,
      deliverOrderRequest?: DeliverOrderRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deliverOrder", "id", id);
      const localVarPath = `/orders/{id}/deliver`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PATCH",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        deliverOrderRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * obtain orders for biker that is idle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIdleOrders: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/orders/biker/idle`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * obtain orders for a specific sender
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOrdersForSender: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/orders/sender`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * obtain orders for biker to do
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getToDoOrdersForBiker: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/orders/biker/in-process`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * OrdersApi - functional programming interface
 * @export
 */
export const OrdersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = OrdersApiAxiosParamCreator(configuration);
  return {
    /**
     * claim an order
     * @param {number} id the id of the order
     * @param {ClaimOrderRequest} [claimOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async claimOrder(
      id: number,
      claimOrderRequest?: ClaimOrderRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SuccessResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.claimOrder(
        id,
        claimOrderRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Create New Order
     * @param {CreateOrderRequest} createOrderRequest create order data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createOrder(
      createOrderRequest: CreateOrderRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createOrder(
        createOrderRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * deliver an order
     * @param {number} id the id of the order
     * @param {DeliverOrderRequest} [deliverOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deliverOrder(
      id: number,
      deliverOrderRequest?: DeliverOrderRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<SuccessResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deliverOrder(
        id,
        deliverOrderRequest,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * obtain orders for biker that is idle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIdleOrders(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Order>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getIdleOrders(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * obtain orders for a specific sender
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getOrdersForSender(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Order>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getOrdersForSender(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * obtain orders for biker to do
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getToDoOrdersForBiker(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Order>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getToDoOrdersForBiker(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * OrdersApi - factory interface
 * @export
 */
export const OrdersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = OrdersApiFp(configuration);
  return {
    /**
     * claim an order
     * @param {number} id the id of the order
     * @param {ClaimOrderRequest} [claimOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    claimOrder(
      id: number,
      claimOrderRequest?: ClaimOrderRequest,
      options?: any
    ): AxiosPromise<SuccessResponse> {
      return localVarFp
        .claimOrder(id, claimOrderRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create New Order
     * @param {CreateOrderRequest} createOrderRequest create order data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOrder(
      createOrderRequest: CreateOrderRequest,
      options?: any
    ): AxiosPromise<Order> {
      return localVarFp
        .createOrder(createOrderRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * deliver an order
     * @param {number} id the id of the order
     * @param {DeliverOrderRequest} [deliverOrderRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deliverOrder(
      id: number,
      deliverOrderRequest?: DeliverOrderRequest,
      options?: any
    ): AxiosPromise<SuccessResponse> {
      return localVarFp
        .deliverOrder(id, deliverOrderRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * obtain orders for biker that is idle
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIdleOrders(options?: any): AxiosPromise<Array<Order>> {
      return localVarFp
        .getIdleOrders(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * obtain orders for a specific sender
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOrdersForSender(options?: any): AxiosPromise<Array<Order>> {
      return localVarFp
        .getOrdersForSender(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * obtain orders for biker to do
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getToDoOrdersForBiker(options?: any): AxiosPromise<Array<Order>> {
      return localVarFp
        .getToDoOrdersForBiker(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * OrdersApi - object-oriented interface
 * @export
 * @class OrdersApi
 * @extends {BaseAPI}
 */
export class OrdersApi extends BaseAPI {
  /**
   * claim an order
   * @param {number} id the id of the order
   * @param {ClaimOrderRequest} [claimOrderRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public claimOrder(
    id: number,
    claimOrderRequest?: ClaimOrderRequest,
    options?: AxiosRequestConfig
  ) {
    return OrdersApiFp(this.configuration)
      .claimOrder(id, claimOrderRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create New Order
   * @param {CreateOrderRequest} createOrderRequest create order data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public createOrder(
    createOrderRequest: CreateOrderRequest,
    options?: AxiosRequestConfig
  ) {
    return OrdersApiFp(this.configuration)
      .createOrder(createOrderRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * deliver an order
   * @param {number} id the id of the order
   * @param {DeliverOrderRequest} [deliverOrderRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public deliverOrder(
    id: number,
    deliverOrderRequest?: DeliverOrderRequest,
    options?: AxiosRequestConfig
  ) {
    return OrdersApiFp(this.configuration)
      .deliverOrder(id, deliverOrderRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * obtain orders for biker that is idle
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public getIdleOrders(options?: AxiosRequestConfig) {
    return OrdersApiFp(this.configuration)
      .getIdleOrders(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * obtain orders for a specific sender
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public getOrdersForSender(options?: AxiosRequestConfig) {
    return OrdersApiFp(this.configuration)
      .getOrdersForSender(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * obtain orders for biker to do
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof OrdersApi
   */
  public getToDoOrdersForBiker(options?: AxiosRequestConfig) {
    return OrdersApiFp(this.configuration)
      .getToDoOrdersForBiker(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * SendersApi - axios parameter creator
 * @export
 */
export const SendersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * get current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentUser: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Sinder login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signinSinder: async (
      authenticateUser?: AuthenticateUser,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/sender/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        authenticateUser,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SendersApi - functional programming interface
 * @export
 */
export const SendersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SendersApiAxiosParamCreator(configuration);
  return {
    /**
     * get current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCurrentUser(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetCurrentUser201Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Sinder login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async signinSinder(
      authenticateUser?: AuthenticateUser,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<AuthenticateUserResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.signinSinder(
        authenticateUser,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * SendersApi - factory interface
 * @export
 */
export const SendersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SendersApiFp(configuration);
  return {
    /**
     * get current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentUser(options?: any): AxiosPromise<GetCurrentUser201Response> {
      return localVarFp
        .getCurrentUser(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Sinder login
     * @param {AuthenticateUser} [authenticateUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signinSinder(
      authenticateUser?: AuthenticateUser,
      options?: any
    ): AxiosPromise<AuthenticateUserResponse> {
      return localVarFp
        .signinSinder(authenticateUser, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * SendersApi - object-oriented interface
 * @export
 * @class SendersApi
 * @extends {BaseAPI}
 */
export class SendersApi extends BaseAPI {
  /**
   * get current user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SendersApi
   */
  public getCurrentUser(options?: AxiosRequestConfig) {
    return SendersApiFp(this.configuration)
      .getCurrentUser(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Sinder login
   * @param {AuthenticateUser} [authenticateUser]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SendersApi
   */
  public signinSinder(
    authenticateUser?: AuthenticateUser,
    options?: AxiosRequestConfig
  ) {
    return SendersApiFp(this.configuration)
      .signinSinder(authenticateUser, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
