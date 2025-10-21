'use client';

import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { RocketLaunch, Engineering } from '@mui/icons-material';

export const Upgrade = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                mt: 3,
                p: 3,
                bgcolor: 'primary.light',
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 2,
            }}
        >
            {/* Existing Signup Section */}
            <Stack direction="row" alignItems="center" spacing={2}>
               

                <Box>
                    <Image
                        alt="Rocket Illustration"
                        src="/images/backgrounds/rocket.png"
                        width={100}
                        height={100}
                    />
                </Box>
            </Stack>

            <Divider sx={{ my: 3, width: '100%' }} />

            {/* New Infyz Process EPC Application Section */}
            <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Infyz Process EPC Application
                </Typography>
                

                
            </Box>
        </Box>
    );
};
