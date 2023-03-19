import { atom } from "recoil";

export const gbgState = atom({
    key: 'gbgState', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });