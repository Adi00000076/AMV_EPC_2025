'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const LayoutPage = () => {
  return (
    <PageContainer title="Layout" description="this is Layout page">
      <DashboardCard title="Layout Page">
        <Typography>This is the Layout page. Add your layout components here.</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default LayoutPage;
