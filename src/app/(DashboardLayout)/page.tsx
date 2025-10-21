'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components with lazy loading
import dynamic from 'next/dynamic';

const SalesOverview = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/SalesOverview'), { loading: () => <div>Loading...</div> });
const YearlyBreakup = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/YearlyBreakup'), { loading: () => <div>Loading...</div> });
const RecentTransactions = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/RecentTransactions'), { loading: () => <div>Loading...</div> });
const ProductPerformance = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/ProductPerformance'), { loading: () => <div>Loading...</div> });
const Blog = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/Blog'), { loading: () => <div>Loading...</div> });
const MonthlyEarnings = dynamic(() => import('@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings'), { loading: () => <div>Loading...</div> });

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <SalesOverview />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <YearlyBreakup />
              </Grid>
              <Grid size={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 4
            }}>
            <RecentTransactions />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8
            }}>
            <ProductPerformance />
          </Grid>
          <Grid size={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
