import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar'

function App() {
  // Authentication



  return (
    <div className="App">
      <Header />
      <Sidebar/>
     {/* if auth: true
      display: header, sidebar, RightsideIcons, filesView */}

     {/* not authenticated: log-in */}
    </div>
  );
}

export default App;
