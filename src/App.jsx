import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Game from './pages/Game.jsx';
import { GameProvider } from './context/GameContext.jsx';
import './App.css'

function App() {

  return (
    <GameProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Game />} />
          </Route>
        </Routes>
      </HashRouter>
    </GameProvider>
  )
}

export default App
