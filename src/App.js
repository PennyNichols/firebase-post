import './App.css';
import PostContextProvider from './context/PostContext';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Home/>
      </PostContextProvider>
    </div>
  );
}

export default App;
