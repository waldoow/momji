// Css for Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersTable from './components/table/users-table';

function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://team.momji.fr/api/v2/static/employees');

      setUsers(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <UsersTable users={users} />
    </div>
  );
}

export default App;
