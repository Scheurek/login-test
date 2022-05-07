import "./App.scss";
import { Header } from "./components/Header";
import { Warning } from "./components/Warning";
import { AuthForm } from "./components/AuthForm";

function App() {
  return (
    <>
      <Header />
      <Warning />
      <AuthForm />
    </>
  );
}

export default App;
