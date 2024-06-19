import React from "react";
import Form1 from "./Form";

function App() {
    const isLoggedIn = true 
    return (
        <div className="container">
            {/* {isLoggedIn ? <h1>Hello</h1> : <Form1 />} */}
            {isLoggedIn && <h1>Hello</h1>}
        </div>
    );
}

export default App;
