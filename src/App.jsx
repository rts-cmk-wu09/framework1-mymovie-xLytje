import "./App.css";
import { Outlet } from "react-router-dom";
// import ListView from "./pages/ListView";
// import DetailsView from "./pages/DetailsView";

function App() {
  return (<div className="App"><Outlet /></div>);
}

export default App;
