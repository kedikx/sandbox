import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from "@material-ui/core/colors/green"
//import { createMuiTheme } from '@material-ui/core'

type Props = { children?: React.ReactNode }

const DefaultThemeProvider: React.FunctionComponent<Props> = ({children}: Props) => {
    const theme = createMuiTheme({
        palette: {
            success: {
              main: green[500],
              contrastText: "#fff"
            }
          }        
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default DefaultThemeProvider