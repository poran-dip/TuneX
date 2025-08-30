import { BrowserRouter, Navigate, Route, Routes } from "react-router"

import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter basename="/TuneX">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
