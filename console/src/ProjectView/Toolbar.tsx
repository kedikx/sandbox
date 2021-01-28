import React from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import SearchIcon from '@material-ui/icons/Search'
import SortIcon from '@material-ui/icons/Sort'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import TuneIcon from '@material-ui/icons/Tune'
import SettingsIcon from '@material-ui/icons/Settings'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'

interface Props {
    classes: any
}

const NegotiationToolbar:React.FunctionComponent<Props> = (props: Props) => {
    const { classes } = props
    return (
    <Toolbar variant="dense" className={classes.toolbar}>  
        <Avatar className={classes.searchIcon}>
            <SearchIcon />
        </Avatar>
        <InputBase classes={{root: classes.searchInputRoot, input: classes.searchInputInput}}
            placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
        /> 
        <Button size="small"><Badge badgeContent={4} color="secondary"><EmojiPeopleIcon /></Badge></Button>
        <Button size="small"><TuneIcon /></Button>
    </Toolbar> 
    )
} 

export {NegotiationToolbar}