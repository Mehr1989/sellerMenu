import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";

import App from "App";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import {  Button, ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { BrowserRouter as Router } from "react-router-dom";
import Test from "views/admin/default/components/Test";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>
       <App />
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/test`} component={Test} />
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RTLLayout} />
            <Redirect from='/' to='/admin' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
      </Router>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
