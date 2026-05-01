import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*  ASYNC THUNK (NO try/catch) */
export const fetchCounterValue = createAsyncThunk(
  "counter/fetchCounterValue",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );

    if (!response.ok) {
      throw new Error("Network request failed");
    }

    const data = await response.json();
    return data.id;
  }
);

/* INITIAL STATE */
const initialState = {
  value: 0,
  loading: false,
  error: null,
};

/* SLICE */
const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterValue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCounterValue.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
        state.error = null;
      })
      .addCase(fetchCounterValue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
