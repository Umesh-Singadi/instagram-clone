import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import AuthPage from "./components/pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
