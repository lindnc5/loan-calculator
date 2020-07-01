import React from "react";

import "./App.css";
import MainFormComponent from "./inputForm";
import Container from "@material-ui/core/Container";
import { AppBar, Typography, Card, CardContent } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar style={{flexGrow: 1}} position="static">
        <Typography style={{margin: 5}} variant="h3">Payoff</Typography>
      </AppBar>
      <Container maxWidth="md" className="Container">
        <Card style={{ height: "100vh" }}>
          <CardContent>
          <MainFormComponent />
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
