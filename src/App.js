import React from "react";
import Header from "components/Header";
import VisualizerScreen from "components/VisualizerScreen";
import "styles/App.scss";
import SortProvider from "context/SortingContext";

function App() {
  return (
    <SortProvider>
      <div className="App">
        <Header />
        <VisualizerScreen />
      </div>
    </SortProvider>
  );
}

export default App;
