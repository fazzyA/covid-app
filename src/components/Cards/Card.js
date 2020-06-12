import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Cards = ({data}) => {

    //console.log(data);
    const {NewConfirmed,NewDeaths,NewRecovered} = data;

    return(
        <div>
    <Card className='root'>
      <CardContent>
        <Typography className='' color="textSecondary" gutterBottom>
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
    <Card className='root'>
      <CardContent>
        <Typography className='' color="textSecondary" gutterBottom>
          New Confirmed Cases
        </Typography>
        <Typography className='pos' variant="h5" component="h2">
        {NewDeaths}
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {Date()}
        </Typography>
      </CardContent>
    </Card>
    <Card className='root'>
      <CardContent>
        <Typography className='' color="textSecondary" gutterBottom>
          New Confirmed Cases
        </Typography>
        <Typography className='pos' variant="h5" component="h2">
        {NewRecovered}
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {Date()}
        </Typography>
      </CardContent>
    </Card>

      </div>

    )
}
export default Cards;