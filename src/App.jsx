import { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";
import LightMode from "@mui/icons-material/LightMode";
import { useColorScheme } from "@mui/material/styles";

const DarkLightMode = () => {
  // const [selectedMode, setSelectedMode] = useState("light");
  const { mode, setMode } = useColorScheme();

  const actions = [
    {
      icon: <LightMode sx={{ fontSize: 18, marginLeft: 0.4 }} />,
      name: "Light",
      value: "light",
    },
    {
      icon: <NightsStayIcon sx={{ fontSize: 18, marginLeft: 0.4 }} />,
      name: "Dark",
      value: "dark",
    },
    {
      icon: <SettingsBrightness sx={{ fontSize: 20, marginLeft: 0.4 }} />,
      name: "System",
      value: "system",
    },
  ];

  const handleChange = (event) => {
    // setSelectedMode(event.target.value);
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 40 }} size='small'>
      <InputLabel id='label-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='label-dark-light-mode'
        id='dark-light-mode'
        value={mode}
        label='mode'
        onChange={handleChange}
      >
        {actions.map((action) => (
          <MenuItem value={action.value} key={action.value}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {action.icon} {action.name}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ position: "absolute", top: 10, right: 0 }}>
        <DarkLightMode />
      </Box>
      <Button
        variant='contained'
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <HomeIcon color='success' />
    </>
  );
}

export default App;
