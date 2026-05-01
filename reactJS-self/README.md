# ⚛️ reactJS-self — Self Practice React App

> A fully routed, multi-page React application where I applied everything I learned independently — from core hooks to API calls, form validation, toastify, and Redux Toolkit.

This is my personal sandbox. Every concept I picked up from tutorials, documentation, and AI chatbots got practiced and built here from scratch.

---

## 📁 Folder Structure

```
reactJS-self/
├── src/
│   ├── App.jsx                      ← Root layout with NavLink navigation
│   ├── routes.jsx                   ← All routes via createBrowserRouter
│   ├── Home.jsx                     ← Landing page
│   ├── Component.jsx                ← JSX & props practice
│   ├── InteractiveApp.jsx           ← Events & interactivity
│   ├── UseStateHooks.jsx            ← All useState examples
│   ├── UseRefHooks-UseEffect.jsx    ← useRef + useEffect layout
│   ├── UseRefComponent.jsx          ← useRef examples
│   ├── UseEffectComponent.jsx       ← useEffect examples
│   ├── CustomeHooks.jsx             ← Custom hooks page
│   ├── ScrollToHash.jsx             ← Hash-based scroll utility
│   ├── NotFound.jsx                 ← 404 page
│   │
│   ├── component/                   ← JSX & props mini-components
│   ├── Interactive/                 ← Advanced interactivity components
│   ├── UseState hooks/              ← useState examples collection
│   ├── UseRef & UseEffect hooks/    ← useRef & useEffect examples
│   ├── Custome hooks/               ← Custom hook implementations
│   ├── React form/                  ← react-hook-form + Yup
│   ├── axios/                       ← Axios GET/POST/PUT/PATCH/DELETE
│   ├── Toastify/                    ← react-toastify notifications
│   └── redux/                       ← Redux Toolkit with async thunk
│       ├── app/store.js
│       └── features/
│           ├── counter/             ← Counter slice + async thunk
│           ├── user/                ← User login/logout slice
│           └── middlewear/          ← Middleware examples
```

**Root files:**
[src/App.jsx](./src/App.jsx) •
[src/routes.jsx](./src/routes.jsx) •
[src/Home.jsx](./src/Home.jsx) •
[src/Component.jsx](./src/Component.jsx) •
[src/InteractiveApp.jsx](./src/InteractiveApp.jsx) •
[src/UseStateHooks.jsx](./src/UseStateHooks.jsx) •
[src/UseRefHooks-UseEffect.jsx](./src/UseRefHooks-UseEffect.jsx) •
[src/UseRefComponent.jsx](./src/UseRefComponent.jsx) •
[src/UseEffectComponent.jsx](./src/UseEffectComponent.jsx) •
[src/CustomeHooks.jsx](./src/CustomeHooks.jsx) •
[src/ScrollToHash.jsx](./src/ScrollToHash.jsx) •
[src/NotFound.jsx](./src/NotFound.jsx)

**Subfolders:**
[src/component/](./src/component) •
[src/Interactive/](./src/Interactive) •
[src/UseState hooks/](./src/UseState%20hooks) •
[src/UseRef & UseEffect hooks/](./src/UseRef%20&%20UseEffect%20hooks) •
[src/Custome hooks/](./src/Custome%20hooks) •
[src/React form/](./src/React%20form) •
[src/axios/](./src/axios) •
[src/Toastify/](./src/Toastify) •
[src/redux/](./src/redux)

---

## 🚦 Routes

| Route | Component | What's practiced |
| --- | --- | --- |
| `/` | [Home.jsx](./src/Home.jsx) | Landing page with links to form pages |
| `/component` | [Component.jsx](./src/Component.jsx) | JSX, props, lists, map & filter |
| `/interactive` | [InteractiveApp.jsx](./src/InteractiveApp.jsx) | Portals, Suspense, Context, lazy loading |
| `/use-state` | [UseStateHooks.jsx](./src/UseStateHooks.jsx) | All useState patterns |
| `/use-ref` | [UseRefHooks-UseEffect.jsx](./src/UseRefHooks-UseEffect.jsx) | Layout route — useRef & useEffect |
| `/use-ref/use-ref-component` | [UseRefComponent.jsx](./src/UseRefComponent.jsx) | useRef examples |
| `/use-ref/use-effect-component` | [UseEffectComponent.jsx](./src/UseEffectComponent.jsx) | useEffect examples |
| `/custom-hooks` | [CustomeHooks.jsx](./src/CustomeHooks.jsx) | Custom hooks — online check, form input |
| `/axios` | [Axios.jsx](./src/axios/Axios.jsx) | Nested Axios layout |
| `/axios` (index) | [AxiosGet.jsx](./src/axios/AxiosGet.jsx) | GET + DELETE with loading/error state |
| `/axios/axios-post` | [AxiosPost.jsx](./src/axios/AxiosPost.jsx) | POST request |
| `/axios/axios-put-patch` | [AxiosPutPatch.jsx](./src/axios/AxiosPutPatch.jsx) | PUT & PATCH requests |
| `/toast` | [ToastLayout.jsx](./src/Toastify/ToastLayout.jsx) | react-toastify all variants |
| `/redux` | [Redux.jsx](./src/redux/Redux.jsx) | RTK counter + user login with async thunk |
| `/reacthookform` | [ReactHookForm.jsx](./src/React%20form/ReactHookForm.jsx) | react-hook-form (standalone page) |
| `/yuplibrary` | [Yup.jsx](./src/React%20form/Yup.jsx) | Yup schema validation (standalone page) |
| `/rhf-yup` | [RhfYup.jsx](./src/React%20form/RhfYup.jsx) | react-hook-form + Yup combined |
| `*` | [NotFound.jsx](./src/NotFound.jsx) | 404 fallback |

---

## 📂 [component/](./src/component)

JSX fundamentals — props, rendering lists, map & filter.

| File | What it shows |
| --- | --- |
| [Profile.jsx](./src/component/Profile.jsx) | Reusable component with props |
| [Todo.jsx](./src/component/Todo.jsx) | Todo list rendering |
| [Person.jsx](./src/component/Person.jsx) | Conditional rendering |
| [PakingList.jsx](./src/component/PakingList.jsx) | Array rendering with map |
| [Scientists.jsx](./src/component/Scientists.jsx) | Map + filter on data |
| [Teaset.jsx](./src/component/Teaset.jsx) | Props passing |
| [Card.jsx](./src/component/Card.jsx) | Reusable card component |
| [MapFilter.jsx](./src/component/MapFilter.jsx) | Filtering a list with state |

---

## 📂 [Interactive/](./src/Interactive)

Advanced React features — Context, Portals, Suspense, lazy loading.

| File | What it shows |
| --- | --- |
| [UseContext.jsx](./src/Interactive/UseContext.jsx) | Context API usage |
| [FloatingPortal.jsx](./src/Interactive/FloatingPortal.jsx) | React Portal (floating element outside DOM tree) |
| [PortalModal.jsx](./src/Interactive/PortalModal.jsx) | Modal built with portal |
| [Suspense.jsx](./src/Interactive/Suspense.jsx) | React Suspense with lazy loading |
| [LazyComponent.jsx](./src/Interactive/LazyComponent.jsx) | Lazily loaded component |
| [Search.jsx](./src/Interactive/Search.jsx) | Debounced search input |
| [SearchData.jsx](./src/Interactive/SearchData.jsx) | Search + data filtering |
| [Play.jsx](./src/Interactive/Play.jsx) | Interactive playground component |

---

## 📂 [UseState hooks/](./src/UseState%20hooks)

All `useState` patterns with hands-on examples.

| File | What it shows |
| --- | --- |
| [UseStateCounter.jsx](./src/UseState%20hooks/UseStateCounter.jsx) | Basic counter |
| [FavColor.jsx](./src/UseState%20hooks/FavColor.jsx) | Simple state with select |
| [CarObject.jsx](./src/UseState%20hooks/CarObject.jsx) | Updating object state correctly |
| [ImageGallery.jsx](./src/UseState%20hooks/ImageGallery.jsx) | useState with image switching |
| [UseStateSendToFrom.jsx](./src/UseState%20hooks/UseStateSendToFrom.jsx) | Controlled form with state |
| [UseStateImageForm.jsx](./src/UseState%20hooks/UseStateImageForm.jsx) | Image form with useState |
| [UseImmerImageForm.jsx](./src/UseState%20hooks/UseImmerImageForm.jsx) | Same form but with **useImmer** (immutable update library) |
| [ArrayCounter.jsx](./src/UseState%20hooks/ArrayCounter.jsx) | Array in state — add/remove |

---

## 📂 [UseRef & UseEffect hooks/](./src/UseRef%20&%20UseEffect%20hooks)

| File | What it shows |
| --- | --- |
| [UseRefInputRefFocus.jsx](./src/UseRef%20&%20UseEffect%20hooks/UseRefInputRefFocus.jsx) | Auto-focus input on mount using `useRef` |
| [UseRefStopWatch.jsx](./src/UseRef%20&%20UseEffect%20hooks/UseRefStopWatch.jsx) | Stopwatch using `useRef` for interval ID |
| [UseRefChat.jsx](./src/UseRef%20&%20UseEffect%20hooks/UseRefChat.jsx) | Auto-scroll chat window with `useRef` |
| [UseEffectCounter.jsx](./src/UseRef%20&%20UseEffect%20hooks/UseEffectCounter.jsx) | Counter with `useEffect` side effect |
| [UseEffectCombined.jsx](./src/UseRef%20&%20UseEffect%20hooks/UseEffectCombined.jsx) | Combined useEffect patterns (cleanup, dependencies) |

> **Remember:** `useRef` stores a mutable value that does NOT cause re-renders.  
> Always access the value via `ref.current`.

---

## 📂 [Custome hooks/](./src/Custome%20hooks)

Custom hooks built from scratch to extract reusable logic.

| File | Hook / Component | What it does |
| --- | --- | --- |
| [UseFormInput.jsx](./src/Custome%20hooks/UseFormInput.jsx) | `useFormInput` | Controlled input hook — returns value + onChange |
| [UseIsOnline.jsx](./src/Custome%20hooks/UseIsOnline.jsx) | `useIsOnline` | Listens to browser online/offline events |
| [OnlineCheck.jsx](./src/Custome%20hooks/OnlineCheck.jsx) | Component | Uses `useIsOnline` to show network status |
| [CustomHookForm.jsx](./src/Custome%20hooks/CustomHookForm.jsx) | Component | Form built using the `useFormInput` custom hook |

**Custom hook example:**
```js
// useFormInput — reusable controlled input
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}
```

---

## 📂 [axios/](./src/axios)

All HTTP methods practiced using **Axios** against a live API (`jsonplaceholder.typicode.com`) and local `json-server`.

| File | Method | What it does |
| --- | --- | --- |
| [AxiosGet.jsx](./src/axios/AxiosGet.jsx) | GET + DELETE | Fetches users, displays in table, delete button removes row |
| [AxiosPost.jsx](./src/axios/AxiosPost.jsx) | POST | Form to add a new user |
| [AxiosPutPatch.jsx](./src/axios/AxiosPutPatch.jsx) | PUT / PATCH | Edit existing user data |
| [Axios.jsx](./src/axios/Axios.jsx) | Layout | Nested layout with sub-route links |

**AxiosGet snippet:**
```js
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
setData(response.data);

// Delete — update UI since we can't actually delete from public API
await axios.delete(`${url}/${id}`);
setData((prev) => prev.filter((user) => user.id !== id));
```

---

## 📂 [Toastify/](./src/Toastify)

[ToastLayout.jsx](./src/Toastify/ToastLayout.jsx) — Demonstrates all toast notification types from **react-toastify**:
- `toast.success()`
- `toast.error()`
- `toast.info()`
- `toast.warning()`
- `toast.promise()` — shows loading → success/error automatically

```jsx
// In App.jsx — mounted globally so toasts work across the whole app
<ToastContainer theme="colored" />
```

---

## 📂 [React form/](./src/React%20form)

Form management with **react-hook-form** and schema validation with **Yup**.

| File | What it covers |
| --- | --- |
| [ReactHookForm.jsx](./src/React%20form/ReactHookForm.jsx) | Full form with `useForm`, `register`, `handleSubmit`, `formState.errors` |
| [Yup.jsx](./src/React%20form/Yup.jsx) | Yup schema standalone — `object()`, `string()`, `required()`, `min()`, `email()` |
| [RhfYup.jsx](./src/React%20form/RhfYup.jsx) | Combined — react-hook-form with `yupResolver` for schema-based validation |
| [TestSchema.jsx](./src/React%20form/TestSchema.jsx) | Testing Yup schemas independently |

**RHF + Yup pattern:**
```js
const schema = yup.object({ name: yup.string().required(), email: yup.string().email().required() });
const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
```

---

## 📂 [redux/](./src/redux)

Full **Redux Toolkit** setup with multiple slices, async thunk, and selector patterns.

| File | What it does |
| --- | --- |
| [Redux.jsx](./src/redux/Redux.jsx) | Main Redux page — counter + user login UI |
| [app/store.js](./src/redux/app/store.js) | `configureStore` with all reducers combined |
| [features/counter/counterSlice.js](./src/redux/features/counter/counterSlice.js) | `increment`, `decrement`, `incrementByAmount`, `fetchCounterValue` (async thunk) |
| [features/counter/counterSelectors.js](./src/redux/features/counter/counterSelectors.js) | Memoized selectors |
| [features/user/userSlice.js](./src/redux/features/user/userSlice.js) | `login` / `logout` actions |
| [features/middlewear/counterApiMiddlewar.js](./src/redux/features/middlewear/counterApiMiddlewar.js) | Custom middleware example |

**[Redux.jsx](./src/redux/Redux.jsx) — using multiple slices together:**
```jsx
const { value, loading, error } = useSelector((state) => state.counter);
const { name, loggedIn } = useSelector((state) => state.user);
const dispatch = useDispatch();

// Async thunk
dispatch(fetchCounterValue());

// Actions
dispatch(increment());
dispatch(login("Pranav"));
dispatch(logout());
```

---

## 📦 Packages Used

| Package | Purpose |
| --- | --- |
| `react` + `react-dom` | Core library |
| `react-router-dom` | Client-side routing |
| `axios` | HTTP requests |
| `react-toastify` | Toast notifications |
| `react-hook-form` | Form state management |
| `yup` | Schema-based validation |
| `@hookform/resolvers` | Connect Yup to react-hook-form |
| `@reduxjs/toolkit` | Redux simplified |
| `react-redux` | React bindings for Redux |
| `use-immer` | Immer-based state updates |

---

## 🛠️ Run Locally

```bash
npm install
npm run dev
```

> Built with **Vite** + **React 19**