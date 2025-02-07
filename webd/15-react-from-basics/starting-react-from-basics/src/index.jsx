import { createRoot } from "react-dom/client";
// to create a website react-dom is used. Whereas for creating a mobile app, react-native is used.
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";

//  component that is passed into the render function
//  will be rendered as a child to the element that is passed 
//  into the createRoot function. (createRoot considers it as the root element.)
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>

);
