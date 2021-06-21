import { Box, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

import { ROUTES } from "../../../../routes/routeNames";

const SignUpPageLayout = ({
  handleSubmit,
  setSignUpValues,
  signUpValues,
  success,
}) => {
  return (
    <div>
      {success ? (
        <div>
          <div>
            {" "}
            <Alert severity="success">
              <AlertTitle>Welcome to Pokemon World!</AlertTitle>
              Your account successfully has been created
            </Alert>{" "}
          </div>
          <Link to={ROUTES.LOGIN_PAGE}>
            <Button>Login Page</Button>
          </Link>
        </div>
      ) : (
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                required
                label="Required"
                name="email"
                onChange={setSignUpValues}
                label="Email"
                type="email"
              />
            </Box>
            <Box>
              <TextField
                required
                label="Required"
                name="firstName"
                onChange={setSignUpValues}
                label="First Name"
                type="text"
              />
            </Box>
            <Box>
              <TextField
                required
                label="Required"
                name="lastName"
                onChange={setSignUpValues}
                label="Last Name"
                type="text"
              />
            </Box>
            <Box>
              <TextField
                name="address"
                onChange={setSignUpValues}
                label="Address"
                type="text"
              />
            </Box>
            <Box>
              <TextField
                name="gender"
                required
                label="Required"
                onChange={setSignUpValues}
                label="Gender"
                type="text"
              />
            </Box>
            <Box>
              <TextField
                required
                label="Required"
                name="password"
                onChange={setSignUpValues}
                label="Password"
                type="password"
              />
            </Box>
            <Box>
              <TextField
                required
                label="Required"
                name="phone"
                onChange={setSignUpValues}
                label="Phone Number"
                type="text"
              />
            </Box>

            <Button type="submit">SIGN UP</Button>
          </form>
        </Box>
      )}
    </div>
  );
};

export default SignUpPageLayout;
