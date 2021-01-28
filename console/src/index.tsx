import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline"
import { useTheme } from '@material-ui/core/styles';
import ThemeProvider from "./ThemeProvider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { ProjectView } from './ProjectView/ProjectView'


import './index.css'

export default function App() {
  return (
    <ThemeProvider>
        <CssBaseline />
        <AppBar elevation={0}>
            <Toolbar variant="dense">
                <Typography variant="h6"> 
                    Ops View (POC)
                </Typography>                
            </Toolbar>
        </AppBar>
        <ProjectView />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
