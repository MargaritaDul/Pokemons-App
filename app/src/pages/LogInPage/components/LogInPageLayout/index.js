import { Box, Button, TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";

const LogInPageLayout = ({
  handleSubmit,
  setLogInValues,
  handleClose,
  handleClick,
  open,
  errors,
  isAuth,
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
              />
            </Box>
            <Box>
              <TextField
                name="password"
                onChange={setLogInValues}
                label="Password"
                type="password"
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
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning">
              {errors}. Please try again
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default LogInPageLayout;
