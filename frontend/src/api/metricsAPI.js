import axios from "axios";
import { ENVIRONMENT } from "Src/constants/env";

export default axios.create({
	baseURL: `${ENVIRONMENT.baseURL}/api/v1/`,
});