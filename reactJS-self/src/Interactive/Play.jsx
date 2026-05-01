function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function handleClick() {
  alert("You clicked me!");
}

function LightSwitch() {
  let bodyStyle = document.body.style;

  if (bodyStyle.backgroundColor === "black") {
    bodyStyle.backgroundColor = "white";
    bodyStyle.color = "black";
  } else {
    bodyStyle.backgroundColor = "black";
    bodyStyle.color = "white";
  }
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>

      <AlertButton message="Uploading!">Upload Image</AlertButton>

      <button onClick={handleClick}>Click me</button>

      <button
        onClick={() => {
          alert("You clicked me!");
        }}
      >
        CLick me direct
      </button>

      <button onClick={LightSwitch}>Toggle the lights</button>

      <br />
      <br />
      <br />
      <h3>hello</h3>
    </div>
  );
}
