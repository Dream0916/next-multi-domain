import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const getBuyModalStatus = (state: RootState) => state.buymodal.status;
