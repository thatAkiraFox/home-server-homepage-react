import "./index.css";
import settings from "../settings.json";
import Main from "./views/Main";
import Footer from "./views/Footer";
import Header from "./views/Header";

function setPageTitle() {
  settings.hostname == null || settings.hostname == ""
    ? (document.title = "Services Dashboard")
    : (document.title = settings.hostname + " | Services Dashboard");
}

export default function Index() {
  setPageTitle();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
