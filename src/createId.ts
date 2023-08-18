import { v4 } from "uuid";

const createId = (): string => v4().replace(/-/g, "");
export default createId;
