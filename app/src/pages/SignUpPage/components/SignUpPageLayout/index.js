import { Box, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { ROUTES } from "../../../../routes/routeNames";
import styles from "./styles.module.scss";

const SignUpPageLayout = ({
  handleSubmit,
  setSignUpValues,
  success,
  signUpValues,
}) => {
  return (
    <div>
      {success ? (
        <div>
          <div>
            <Alert severity="success">
              <AlertTitle>Welcome to Pokemon World!</AlertTitle>
              Your account successfully has been created
            </Alert>
          </div>
          <Link to={ROUTES.LOGIN_PAGE}>
            <Button>Login Page</Button>
          </Link>
        </div>
      ) : (
        <Box className={styles.container}>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                required
                label="Required"
                name="email"
                onChange={setSignUpValues}
                label="Email"
                type="email"
                value={signUpValues.email}
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
                value={signUpValues.firstName}
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
                value={signUpValues.lastName}
              />
            </Box>
            <Box className={styles.address}>
              <TextField
                name="address"
                onChange={setSignUpValues}
                label="Address"
                type="text"
              />
            </Box>
            <Box>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                <Select
                  native
                  onChange={setSignUpValues}
                  inputProps={{
                    name: "gender",
                    id: "age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <TextField
                required
                label="Required"
                name="password"
                onChange={setSignUpValues}
                label="Password"
                type="password"
                value={signUpValues.password}
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
                value={signUpValues.phone}
              />
            </Box>
            <button type="submit" className={styles.buttonStyle}>
              SIGN UP
            </button>
          </form>
        </Box>
      )}
    </div>
  );
};

export default SignUpPageLayout;
