// components/Loading.tsx
import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loading: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh" // full viewport height
        >
            <CircularProgress />
            <Typography variant="h6" mt={2}>
                Loading...
            </Typography>
        </Box>
    );
};

export default Loading;
