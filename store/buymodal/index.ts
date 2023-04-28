/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showBuyModal } from "./actions";
import type { buyModalState } from "./types";

const PREFIX = "alert";

const initialState: buyModalState = {
  status: false,
};

export const buymodalReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      showBuyModal.fulfilled.type,
      (state: buyModalState, action: PayloadAction<any>) => {
        state.status = action.payload.status;
      }
    );
  },
});

export { showBuyModal };

export default buymodalReducer.reducer;
