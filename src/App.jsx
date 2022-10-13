import "./test.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const updateState = () => setCounter((state) => state + 1);

  useEffect(() => {
    updateState();
  }, []);

  console.log({ counter, window });

  return (
    <div className="page-container">
      <Header />
      <MainContent />
    </div>
  );
}
