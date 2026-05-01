# React Redux Toolkit

## Overview

- **Provider**: Provides data to the React DOM from the Redux store, which wraps around `main.jsx`.
- **Slice**: A combination of actions and reducers.
- **Action**: Takes data from the application to store in the Redux store.
- **Reducer**: Keeps data updated (e.g., add, delete operations).
- **Redux Toolkit**: A wrapper for Redux that makes the code simpler, shorter, and easier to use.

- **createSlice**: for one slice and reducer.
- **configureStore**: combining multiple slice and reducer

## Project Overview

This is a React application built with Vite, using Redux Toolkit for state management. It demonstrates a simple e-commerce cart functionality.

### Components

- **App.jsx**: The root component that renders the application.
- **Header.jsx**: Displays the application header.
- **Product.jsx**: Renders individual product information.
- **AddToCart.jsx**: Button component to add products to the cart.
- **CartList.jsx**: Displays the list of items in the cart.

### Redux Setup

- **store.js**: Configures the Redux store with the necessary slices.
- **productSlice.js**: Manages product-related state and actions.
- **slice.js**: Additional slice for cart or other state management.

The app uses modern React practices with hooks and Redux Toolkit's simplified API for managing global state.
