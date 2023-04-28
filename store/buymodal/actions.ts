import { createAsyncThunk } from "@reduxjs/toolkit";

const showBuyModal = createAsyncThunk("buymodal/show", async (status: any) => {
  const payload = {
    status: status,
  };
  return payload;
});

export { showBuyModal };
