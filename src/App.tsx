import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Authentication } from './pages/Authentication'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}>
            <Route
              path="messages"
              element={<div>Message</div>}
            />
            <Route path="tasks" element={<div>Dashboard</div>} />
          </Route>
          <Route path="about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
