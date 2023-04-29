import Blog from './containers/Blog/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div className="App">
            <Blog />
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
