import { toast } from "react-toastify";
export default function ToastLayout() {
  return (
    <section>
      <div style={{ padding: "40px" }}>
        <h2>React Toastify Variants</h2>

        <button
          onClick={() =>
            toast("default light theme", {
              position: "top-center",
              autoClose: "5000",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: "light",
            })
          }
        >
          default light theme
        </button>
        <br />
        <br />
        <button onClick={() => toast("default dark theme", { theme: "dark" })}>
          default dark theme
        </button>
        <br />
        <br />
        <button onClick={() => toast.success("success toast")}>success</button>
        <br />
        <br />
        <button onClick={() => toast.warning("warning toast")}>warning</button>
        <br />
        <br />
        <button onClick={() => toast.error("error toast")}>error</button>
        <br />
        <br />
        <button onClick={() => toast.info("info toast")}>info</button>
        <br />
        <br />
        <button onClick={() => toast.loading("loading toast")}>loading</button>
        {/* toast.dismiss() removes loading toast */}
        <br />
        <br />
        {/* no need for login in following case  */}
        <button onClick={() => toast.promise("promise toast")}>promise</button>
        {/* <button
          onClick={() =>
            toast.promise(fakeLoginApi(), {
              pending: "Logging in...",
              success: "Login successful",
              error: "Login failed",
            })
          }
        >
          toast promise 2
        </button> */}
        <br />
        <br />
        <button
          onClick={() =>
            toast(
              <div>
                <h4>Custom Toast</h4>
                <p>This is a custom JSX toast</p>
              </div>
            )
          }
        >
          Custome toast
        </button>
      </div>
    </section>
  );
}
