import { useState } from "react";
import { createPortal } from "react-dom";

export default function Portal() {
  const [Open, setOpen] = useState(false);
  return (
    <section>
      <h1>Portal</h1>

      <div>
        <p>This is a portal modal. click on the following button</p>
      </div>

      <button onClick={()=>{setOpen(true);}}>Open</button>

      <Modal Open={Open}>
        <h2>This is a portal modal</h2>
        <p>Click on the close button</p>
        <button onClick={()=>{setOpen(false);}}>Close</button>
      </Modal>
      
    </section>
  );
}

function Modal({ Open, children}) {
  if (!Open) {
    return null;
  }
  return createPortal (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
        }}>
        {children}
      </div>
    </div>,
    document.body
  );
}
