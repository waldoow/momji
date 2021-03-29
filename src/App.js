import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://team.momji.fr/api/v2/static/employees');

      setUsers(response.data);
    }

    fetchData();
  });

  return (
    <div className="App">
      <h1> test </h1>
    </div>
  );
}

export default App;
