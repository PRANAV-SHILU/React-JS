// import { createSelector } from "@reduxjs/toolkit";

// const selectCounter = (state) => state.counter;  //dependency given in []

// export const selectCounterValue = createSelector(
//   [selectCounter],
//   (counter) => counter.value
// );

// export const selectCounterLoading = createSelector(
//   [selectCounter],
//   (counter) => counter.loading
// );

// export const selectCounterError = createSelector(
//   [selectCounter],
//   (counter) => counter.error
// );


//This won't work because selectCounter can re-render all 
// you can use plain selector