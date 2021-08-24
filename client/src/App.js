import "./App.css";
import "antd/dist/antd.css";
import "../src/style/custom-antd.css";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import Auth from "./hoc/auth";

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
        {/* <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/myboard" render={() => <MainPage />} />
        <Route exact path="/write" render={() => <MainPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/register" render={() => <RegisterPage />} /> */}

        {/* real */}
        <Route exact path="/" component={Auth(MainPage, true)} />
        <Route exact path="/board/all" component={Auth(MainPage, true)} />
        <Route exact path="/board/my" component={Auth(MainPage, true)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </Router>
  );
}

export default App;
