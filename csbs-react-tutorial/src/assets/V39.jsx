export default function V39() {
  function handleSubmit(e) {
    e.preventDefault();
    //  Accessing form values using DOM methods, if you use useRef here it is still uncontrolled component
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    console.log("User:", user);
    console.log("Password:", password);
    // e.currentarget.submit();
  }

  return (
    <section>
      <h2>V39 - Uncontrolled Components</h2>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="user" placeholder="Name" />
        <input type="password" id="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </section>
  );
}
