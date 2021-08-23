import "./App.css";
import "antd/dist/antd.css";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route exact path="/register" render={() => <RegisterPage />} />
      </Switch>
    </Router>
  );
}

export default App;
