import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     // display: 'flex',
     float:'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing(48),
        height: theme.spacing(16),
      },
    },
  }),
);

export default function SimplePaperCard({data}) {
  const classes = useStyles();
  const {NewConfirmed,NewDeaths,NewRecovered} = data;

  return (
    <div className={`${classes.root} card-main`}>
      <Paper variant="square" elevation={5} component='div'>   
       <Card className='card-root1'>
      <CardContent>
        <Typography className='new' color="textSecondary" gutterBottom>
          New Confirmed Cases
        </Typography>
        <Typography className='pos' variant="h5" component="h2">
        {NewConfirmed}
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {Date()}
        </Typography>
      </CardContent>
    </Card>
</Paper>
      <Paper variant="square" elevation={5} component='div'> 
         <Card className='card-root2'>
      <CardContent>
        <Typography className='death' color="textSecondary" gutterBottom>
          New Confirmed Deaths
        </Typography>
        <Typography className='pos' variant="h5" component="h2">
        {NewDeaths}
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {Date()}
        </Typography>
      </CardContent>
    </Card>
</Paper>
      <Paper variant="square" elevation={5} component='div'>   
       <Card className='card-root3'>
      <CardContent>
        <Typography className='rec' color="textSecondary" gutterBottom>
          New Confirmed Recovered
        </Typography>
        <Typography className='pos' variant="h5" component="h2">
        {NewRecovered}
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {Date()}
        </Typography>
      </CardContent>
    </Card>
</Paper>
    </div>
  );
}