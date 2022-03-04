import "./App.css";
import { GlobalStyle } from "./styles/global-style";
import PageProps from "./components/Common/Layout/PageProps";
import MainPage from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageProps>
        <MainPage />
      </PageProps>
    </>
  );
}

export default App;
