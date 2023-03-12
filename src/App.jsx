import "./App.css";
import { TopBar } from "./components";
import { MainPage, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<TopBar />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
