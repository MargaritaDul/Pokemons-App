import { Box, Button, TextField } from "@material-ui/core";

const LogInPageLayout = ({ handleSubmit, setLogInValues }) => {
  return (
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

          <Button type="submit">LOG IN</Button>
        </form>
      </Box>
    </div>
  );
};

export default LogInPageLayout;
