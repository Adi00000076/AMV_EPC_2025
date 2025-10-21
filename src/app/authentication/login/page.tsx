'use client';
import { Grid, Box, Card, TextField, Button } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

const Login2 = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Image Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundImage: `url("https://imgproxy.watchmedier.dk/watchmedier/resize:fill:1200:0:0/plain/https://photos.watchmedier.dk/Images/17624029/85aoeg/ALTERNATES/master-3_2/wall-jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.7)", // optional: darken the image for contrast
          }}
        />

        {/* Login Form */}
        <Grid
          container
          sx={{
            top:"100px",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid sx={{ maxWidth: "400px", width: "100%" }}>
            <Card
              elevation={9}
              sx={{
                p: 4,
                backgroundColor: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Box display="flex" justifyContent="center" mb={3}>
                <Logo />
              </Box>

              {/* Login Inputs */}
              <Box>
                <TextField
                  fullWidth
                  id="outlined-username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  id="outlined-password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
