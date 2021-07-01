import { Box, Button, TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";

import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";

const LogInPageLayout = ({
  handleSubmit,
  setLogInValues,
  handleClose,
  handleClick,
  open,
  errors,
  handleLoginReset,
  logInValues,
}) => {
  return (
    <div>
      <div>
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                name="email"
                onChange={setLogInValues}
                label="Email"
                type="email"
                value={logInValues.email}
              />
            </Box>
            <Box>
              <TextField
                name="password"
                onChange={setLogInValues}
                label="Password"
                type="password"
                value={logInValues.password}
              />
            </Box>
            <Button type="submit" onClick={handleClick}>
              LOG IN
            </Button>
          </form>
          <div>
            <p>
              Don't have an account? Please follow the link:
              <Link to={ROUTES.SIGNUP_PAGE}>
                <Button>SIGN UP PAGE</Button>
              </Link>
            </p>
          </div>
        </Box>
        {!errors ? (
          <div></div>
        ) : (
          <div>
            <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning">
                {errors}. Please try again
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
    </div>
  );
};

LogInPageLayout.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LogInPageLayout;
