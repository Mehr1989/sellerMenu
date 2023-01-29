import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";


import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import {  Button, ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import Inventory from "MyComponents/Inventory";
import Guidance from "MyComponents/Guidance";
import Wallet from "MyComponents/Wallet";
import Orders from "MyComponents/Orders";
import Feedback from "MyComponents/Feedback";


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
     
    
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
          <Route path={`/feedback`} component={Feedback} />
          <Route path={`/orders`} component={Orders} />
          <Route path={`/wallet`} component={Wallet} />
          <Route path={`/guidance`} component={Guidance} />
            <Route path={`/inventory`} component={Inventory} />
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RTLLayout} />
            <Redirect from='/' to='/admin' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
     
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
