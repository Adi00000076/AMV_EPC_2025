"use client";
import { Grid, Box, Card, TextField, Button } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

const Login2 = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box sx={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
        {/* Vimeo Video Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
            "& iframe": {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "56.25vw", // maintains 16:9 aspect ratio
              minWidth: "100%",
              minHeight: "100%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              objectFit: "cover",
            },
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/658623240?h=4bc95cce2c&dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Login Form */}
        <Grid
          container
          sx={{
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item sx={{ maxWidth: "400px", width: "100%" }}>
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
