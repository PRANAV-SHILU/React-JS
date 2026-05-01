import { Suspense, lazy } from "react";

const LazyComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./LazyComponent.jsx"));
      }, 5000);
    })
);

export default function SuspenseMSg() {
  return (
    <section>
      <Suspense fallback={<h2>Loading..........</h2>}>
        <h1>Suspense</h1>
        <p>
          You can see it displays (Loading...) when component is still loading
        </p>
        <LazyComponent />
      </Suspense>
    </section>
  );
}
