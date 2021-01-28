import React from 'react'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import PersonIcon from '@material-ui/icons/Person'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import CheckIcon from '@material-ui/icons/Check'
import CancelIcon from '@material-ui/icons/Cancel'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import EmailIcon from '@material-ui/icons/Email'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import background from "../img/under-construction.png"

interface Props {
    classes: any,
    data: any
}

const ContactBox:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { company, contact } = data
    return (
        <Grid container> 
            <Grid item xs={12}>
            <Typography noWrap className={classes?.contactCompany}>{company?.name}</Typography>
            </Grid>
            <Grid item className={classes?.contactName}>
                {contact?.name}
            </Grid>
            <Hidden xsDown>
            <Grid item className={classes?.contacteEmail}>
                <span className='email'>{contact?.email}</span> 
            </Grid>
            </Hidden>
        </Grid>
    )
}

const StepperBox:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { supplier } = data
    const steps = ['Contact', 'Chat', 'Closing']
    return (
        <Stepper alternativeLabel activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

    )
}

const StatusBox:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { supplier, status } = data
    const emailClasses = clsx(
        status?.contact==null && classes?.statusDefault,
        status?.contact==false && classes?.statusInProgress,
        status?.contact==true && classes?.statusSuccess
    )
    const chatClasses = clsx(
        status?.chat==null && classes?.statusDefault,
        status?.chat==false && classes?.statusInProgress,
        status?.chat==true && classes?.statusSuccess
    )
    const resultClasses = clsx(
        status?.result==null && classes?.statusDefault,
        status?.result==false && classes?.statusNegative,
        status?.result==true && classes?.statusSuccess
    )
    return (
        <Grid container justify="center" className={classes?.infoBlock}>
            <Grid item xs={4} container justify="center" className={emailClasses}> 
                <EmailIcon fontSize="small" color="inherit" />
            </Grid>
            <Grid item xs={4} container justify="center"> 
                <QuestionAnswerIcon fontSize="small" color="inherit" className={chatClasses}/> 
            </Grid>
            <Grid item xs={4} container justify="center"> 
                {status?.result==null && <EmojiPeopleIcon fontSize="small" className='warning'/>}
                {status?.result==true && <CheckIcon fontSize="small" className={resultClasses}/>} 
                {status?.result==false && <CancelIcon fontSize="small" className={resultClasses}/>}
            </Grid>
            <Grid item xs={12} container justify="center" style={{marginTop: "5px"}}> 
                {status?.label}
            </Grid>
        </Grid>
    )
}

const InfoBox:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { supplier, status } = data
    let supplierValue = "n/a"
    if(typeof supplier?.value == 'number') {
        let fmt = {}
        if(supplier?.currency) {
            fmt = {style: 'currency', currency: supplier.currency}
        }
        supplierValue = supplier.value.toLocaleString('en-us', fmt)
    } else if(typeof supplier?.value == 'string') {
        supplierValue = supplier.value
    }
    return (
        <Grid container justify="flex-end" className={classes?.infoBlock}>
            <Grid item xs={12}> 
                {!status?.result && <span>{'-'}</span>}
                {status?.result && <span>{'100 %'}</span>}
            </Grid>
            <Grid item xs={12}>
                {supplierValue}
            </Grid>
        </Grid>
    )
}

const TagsBox:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { tags } = data
    return (
        <Grid container className={classes?.tagsBlock}>
            {tags.map((tag: string)=><span className={classes?.tag}>{tag}</span>)}
        </Grid>
    )
}

const NegotiationCard:React.FunctionComponent<Props> = ({classes, data}: Props) => {
    const { company, contact, supplier, tags } = data
    const isTest = tags.findIndex((tag: string)=>(tag=='TEST'))>=0
    const cardStyle = isTest ? { backgroundImage: `url(${background})`} : {}
    return (
        <Card className={clsx(classes?.cardBlock, {'bg-img-bottom-y':isTest})} style={cardStyle}>
            <CardContent className={classes?.cardContent}>
            <Grid container spacing={1}>
                <Grid item xs={6} sm={4}> 
                    <ContactBox classes={classes} data={data} />
                </Grid>
                <Grid item xs={6} sm={5}> 
                    <StatusBox classes={classes} data={data} />
                </Grid> 
                <Hidden xsDown>
                <Grid item sm={3}> 
                    <InfoBox classes={classes} data={data} />
                </Grid>
                </Hidden>
                <Grid item xs={8}>
                    <TagsBox classes={classes} data={data} />
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}


//<LinearProgress variant="determinate" value={50} style={{border: "1px solid"}} />

export {NegotiationCard}