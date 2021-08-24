import "./App.css";
import "antd/dist/antd.css";
import "../src/style/custom-antd.css";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import BasePage from "./components/Base";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
	width: 100%;
  }

  #root {
	width: 100%;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/board/all" render={() => <MainPage />} />
        <Route exact path="/board/my" render={() => <BasePage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/register" render={() => <RegisterPage />} />
      </Switch>
    </Router>
  );
}

export default App;
