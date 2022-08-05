import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomeDashboardPage } from "./pages/home-dashboard-page";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeDashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
