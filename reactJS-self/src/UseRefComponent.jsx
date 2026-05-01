import "./App.css";
import StopWatch from "./UseRef & UseEffect hooks/UseRefStopWatch.jsx";
import Chat from "./UseRef & UseEffect hooks/UseRefChat.jsx";
import InputRefFocus from "./UseRef & UseEffect hooks/UseRefInputRefFocus.jsx";

export default function UseRefComponent() {
  return (
    <section>
      <h2>UseRef Hook Examples</h2>
      <section>
        <StopWatch />
      </section>
      <section>
        <Chat />
      </section>
      <section>
        <InputRefFocus />
      </section>
    </section>
  );
}
