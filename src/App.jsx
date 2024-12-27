import { useState } from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon color="success" />
    </>
  );
}

export default App;
