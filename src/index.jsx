import { createRoot } from "react-dom/client";
import React from "react";
// import Header from "./Components/Header";
// import MainContent from "./Components/MainContent";
// import Footer from "./Components/Footer";
import ReactImage from "./assets/react.svg";
import App from "./App";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      {/*fragment*/}
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
root.render(<App />);
