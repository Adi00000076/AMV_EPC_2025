'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const ComponentsPage = () => {
    return (
        <PageContainer title="Components" description="this is Components page">
            <DashboardCard title="Components Page">
                <Typography>This is the Components page. Add your components here.</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default ComponentsPage;
