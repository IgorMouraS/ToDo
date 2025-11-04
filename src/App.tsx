import { BrowserRouter, Routes, Route } from "react-router";

import LayoutMain from './pages/layout-main'
import ComponentsPage from './pages/page-component'
import PageHome from './pages/page-home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
