import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Dashboard from "./Components/DrawerItems/Dashboard";
import Wallet from "./Components/DrawerItems/Wallet";
import Perks from "./Components/DrawerItems/Perks";
import Beneficiaries from "./Components/DrawerItems/Beneficiaries";
import FXCentre from "./Components/DrawerItems/FXCentre";
import Cards from "./Components/DrawerItems/Cards";




function App() {
  return (
    <div className="vibes">
      <CssBaseline />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/wallet" component={Wallet } />
        <Route exact path="/perks" component={Perks} />
        <Route exact path="/beneficiaries" component={Beneficiaries} />
        <Route exact path="/fxcentre" component={FXCentre} />
        <Route exact path="/cards" component={Cards } />
      </Switch>
    </div>
  );
}

export default App;
