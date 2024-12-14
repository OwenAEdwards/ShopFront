import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import Signup from "./Signup";
import { verifyCustomerByCredentials } from "../Helpers/customerApiCalls";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleToggleChange = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    let password = "";
    let user = null;
    const userType = isAdmin ? "admin" : "user";

    if (!isAdmin) {
      // Retrieve creditCard value only if the field exists (not admin)
      password = event.target.elements.password?.value;
    }


    try {
      user = await verifyCustomerByCredentials(username, password);
      if (user == true) {
        alert("Login successful");
      } else {
        alert("Invalid username and/or password");
      }
    }
    catch (error) {
      alert("Error retrieving user:", error);
    }

    };

  return (
    <Box
      height={500}
      width={500}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <h1>Login:</h1>
          </Grid>
          <Grid item>
            <label htmlFor="userType">Admin?</label>
            <Switch
              id="userType"
              checked={isAdmin}
              onChange={handleToggleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              name="username"
            />
          </Grid>
          {!isAdmin && (
            <Grid item>
              <TextField
                id="Password"
                type="password"
                label="Password"
                variant="outlined"
                name="password"
              />
            </Grid>
          )}
          <Grid item>
            <Button variant="contained" type="submit">
              Sign-in
            </Button>
          </Grid>
          <Grid item>
            <br />
            <h3>
              <u>Need an account?</u>
            </h3>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleSignup}>
              Sign-up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={showSignup} onClose={() => setShowSignup(false)}>
        <Signup />
      </Dialog>
    </Box>
  );
};

export default Login;
