import { useState } from "react";
import "./App.css";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

function App() {
  // Ganti default ke "signIn" jika ingin melihat halaman Sign In
  const [page, setPage] = useState("signUp");

  return (
    <>
      {page === "signUp" ? (
        <SignUp onNavigate={() => setPage("signIn")} />
      ) : (
        <SignIn onNavigate={() => setPage("signUp")} />
      )}
    </>
  );
}

export default App;
