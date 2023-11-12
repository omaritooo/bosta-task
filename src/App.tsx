import { useEffect } from "react";
import "./assets/styles/app.scss";
import { Header } from "./components/common/Header";
import "./utils/i18n";
import { useTranslation } from "react-i18next";
import { HomeView } from "./Views/HomeView";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>
      <Header />
      <HomeView />
    </>
  );
}

export default App;
