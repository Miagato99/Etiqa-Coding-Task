import React, {useEffect} from "react";
import "./App.css";
import AppComponent from "./components/App";

function App() {
  useEffect(() => {
    document.title = "GitHub Stars Explorer";
  }, []);
  return (
    <div className="App">
      <AppComponent />
    </div>
  );
}

export default App;
