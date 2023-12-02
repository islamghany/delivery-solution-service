import { QueryClient } from "react-query";

const client = new QueryClient();
export { useLogin } from "./auth";
export {
  useGetIDleOrders,
  useGetToDoOrders,
  useClaimOrder,
  QueryKeys,
} from "./orders";
export default client;
