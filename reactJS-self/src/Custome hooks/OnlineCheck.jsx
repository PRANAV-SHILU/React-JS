import { useIsOnline } from "./UseIsOnline.jsx";

function StatusBar() {
  const isOnline = useIsOnline();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
function SaveButton() {
  const isOnline = useIsOnline();

  function handleClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function OnlineCheck() {
  return (
    <>
      <StatusBar />
      <SaveButton />
    </>
  );
}
