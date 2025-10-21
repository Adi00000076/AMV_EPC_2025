// import { Typography, List, ListItem, ListItemText } from '@mui/material';
// import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// // Define the type for your fake data
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const SamplePage = async () => {
//   // Fetch fake JSON data from JSONPlaceholder API on the server
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users: User[] = await res.json();

//   return (
//     <PageContainer title="Sample Page" description="This is a sample page">
//       <DashboardCard title="User List">
//         <List>
//           {users.map((user) => (
//             <ListItem key={user.id}>
//               <ListItemText primary={user.name} secondary={user.email} />
//             </ListItem>
//           ))}
//         </List>
//       </DashboardCard>
//     </PageContainer>
//   );
// };

// export default SamplePage;





'use client';

import { useEffect, useState } from 'react';
import { CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Define TypeScript interface for user data
interface User {
  id: number;
  name: string;
  email: string;
}

const SamplePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <PageContainer title="Sample Page" description="This is a sample page">
      <DashboardCard title="User List">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <List>
            {users.map((user) => (
              <ListItem key={user.id}>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))}
          </List>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
