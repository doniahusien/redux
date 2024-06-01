import { createStore } from "redux";
import iceCreamReducer from "./iceCreamReducer";

export const iceStore = createStore(iceCreamReducer);
