import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Directory from "./pages/Directory.jsx";


export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>

          {/* Landing page */}
          <Route path="/" element={<Directory />} />

          {/* Unknown route */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}