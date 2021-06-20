import { Box, Button, TextField } from "@material-ui/core";

const SignUpPageLayout = ({ signUpValues, handleSubmit, handleFormChange }) => {
  return (
    <div>
      <dic>hello</dic>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box>
            <TextField
              name="email"
              onChange={handleFormChange}
              label="Email"
              type="email"
              value={signUpValues.email}
            />
          </Box>
          <Box>
            <TextField
              name="firstName"
              onChange={handleFormChange}
              label="firstName"
              type="email"
              value={signUpValues.firstName}
            />
          </Box>
          <Button type="submit">SIGN UP</Button>
        </form>
      </Box>
    </div>
  );
};

export default SignUpPageLayout;
