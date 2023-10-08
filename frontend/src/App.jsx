import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Public from './components/Public'
import Login from './components/Login/Login'
import RequireAuth from './components/Login/RequireAuth'
import Welcome from './components/Login/Welcome'
import UsersList from './components/users/UsersList'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App