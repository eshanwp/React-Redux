import {BUY_CAKE} from "./cake-type-const";

export const buyCake = (number) => {
  return {
      type: BUY_CAKE,
      payload: number
  }
};
