import "./App.css";
import FilesView from "./components/filesView/FilesView";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  // Authentication

  return (
    <div className="App">
      <Header />
      <div className="app__main">
        <Sidebar />
        <FilesView />
      </div>
      {/* if auth: true
      display: header, sidebar, RightsideIcons, filesView */}

      {/* not authenticated: log-in */}
    </div>
  );
}

export default App;
