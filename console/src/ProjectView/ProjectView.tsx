import React, { useState } from "react"
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import { NegotiationToolbar } from './Toolbar' 
import { NegotiationCard } from './Card'

import { getProjectData } from '../data'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: theme.palette.background.default,
        marginTop: "48px"
    },
    toolbar: {
        display: "flex",
        paddingLeft: 0,
        paddingRight: 0,
        background: theme.palette.background.default, 
        marginBottom: theme.spacing(0.5),
        borderBottom: "1px solid",
        alignItems: 'center'    
    },
    searchIcon: {
        background: 'inherit', 
        color: theme.palette.text.disabled
    },
    searchInputRoot: {
        flexGrow: 1,
        color: 'inherit',
    },    
    searchInputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        width: '100%',
    },
    container: {
        height: '100vh', 
        paddingTop: theme.spacing(0.5)
    },
    cardBlock: {
        marginBottom: theme.spacing(0.5),
        padding: 0
    },
    cardContent: {
        padding: theme.spacing(1),
        margin: 0
    },
    contactBlock: {
        textAlign: "left"
    },
    contactCompany: {
        fontWeight: "bold",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    contactName: {
        fontStyle: "italic" 
    },
    infoBlock: {
        textAlign: "right"
    },
    tagsBlock: {
        textAlign: "right"
    },
    tag: {
       display: "block-inline",
       textAlign: "center",
       marginLeft: 1,
       padding: "5px",
       paddingTop: "2px",
       paddingBottom: "0",
       fontSize: "0.75em",
       color: theme.palette.text.primary,
       background: "rgba(0, 0, 0, 0.1)",  
       border: "1px solid rgba(0, 0, 0, 0.3)",
       borderRadius: "5px"
    },
    statusDefault: {
        color: grey[500]
    },
    statusInProgress: {
        color: blue[900]
    },
    statusSuccess: {
        color: green[500]
    },
    statusNegative: {
        color: red[500]
    }    

}))


export function ProjectView() {
    const [data, setData] = useState(getProjectData())
    const classes = useStyles()
    const rows = data.map((row) => (<NegotiationCard classes={classes} data={row}/>))
    return (
        <main className={classes.root}>
        <Container className={classes.container}>
            <NegotiationToolbar classes={classes} />
            {rows}
        </Container>
        </main>
    )
}


