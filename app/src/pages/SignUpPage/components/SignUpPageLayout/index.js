import { Box, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

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
          <div> Your account successfully has been created! </div>
          <Link to={ROUTES.LOGIN_PAGE}>
            <button>Login Page</button>
          </Link>
        </div>
      ) : (
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                name="email"
                onChange={setSignUpValues}
                label="Email"
                type="email"
              />
            </Box>
            <Box>
              <TextField
                name="firstName"
                onChange={setSignUpValues}
                label="First Name"
                type="text"
              />
            </Box>
            <Box>
              <TextField
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
                onChange={setSignUpValues}
                label="Gender"
                type="text"
              />
            </Box>
            <Box>
              <TextField
                name="password"
                onChange={setSignUpValues}
                label="Password"
                type="password"
              />
            </Box>
            <Box>
              <TextField
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
