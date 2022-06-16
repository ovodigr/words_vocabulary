import axios from "axios";
import { BASE_URL_SERVER } from "config";

export default axios.create({
    baseURL: BASE_URL_SERVER + '/'
});