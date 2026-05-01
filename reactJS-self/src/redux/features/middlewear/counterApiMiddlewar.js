let persistReady = false;

const counterApiMiddlewear = (store) => (next) => (action) => {
  if (action.type === "persist/PERSIST") {
    persistReady = true;
  }

  if (action.type === "counter/fetchCounterValue.pending") {
    const currentValue = store.getState().counter.value;

    if (!persistReady || currentValue != 0) {
      console.log("⏭️ Skipping API call, persisted value exists");
      return; // BLOCK the action
    }
  }

  return next(action);  
};

export default counterApiMiddlewear;


// this will not work, just an example of midlewear 