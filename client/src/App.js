import { Route, Routes } from 'react-router-dom'
import './styles/App.scss'
import HomePage from './pages/HomePage'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;