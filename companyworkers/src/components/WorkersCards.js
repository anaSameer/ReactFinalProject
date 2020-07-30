import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import {Link} from 'react-router-dom'
import { Button } from "@material-ui/core";
import $ from 'jquery'
import Typography from '@material-ui/core/Typography';
import WorkerDetails from './WorkerDetails'
import * as firebase from 'firebase';



class WorkersCards extends Component {

    constructor() {
        super();
        this.state = {
        Name:'אחמד שרבאתי',
        description:'ראש צוות'
        };
    }
    componentDidMount(){
        $("Button").click(function(){
            return <Link to="/details"/>
        })

             var database = firebase.database();
             const rootRef = database.ref().child('xTCz7SbvtqoQKrScqS30');
             const nameRef= rootRef.child('Name');
             nameRef.on('value', snap => {
                this.setState({
                    Name:snap.val()
                })
           });
    }


   render() {
   return (
    <Router>  
        <div className="row">
        <Route exact path="/" render={props => (
            <React.Fragment>
                <Card style={{maxWidth:'355px'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image="https://i.ibb.co/6cSrrcR/29804756-e4ba-4b07-b310-b226962c60f7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h2>{this.state.description}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{border:'20px'}}>
                        <Link to="/details">Show More</Link>
                    </Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )} />
        <Route exact path="/details" component={WorkerDetails} />

        <Route exact path="/" render={props => (
            <React.Fragment>
                <Card style={{maxWidth:'355px'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image="https://i.ibb.co/6cSrrcR/29804756-e4ba-4b07-b310-b226962c60f7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h2>{this.state.description}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{border:'20px'}}>
                        <Link to="/details">Show More</Link>
                    </Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )} />
        <Route exact path="/details" component={WorkerDetails} />

        <Route exact path="/" render={props => (
            <React.Fragment>
                <Card style={{maxWidth:'355px'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image="https://i.ibb.co/6cSrrcR/29804756-e4ba-4b07-b310-b226962c60f7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h2>{this.state.description}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{border:'20px'}}>
                        <Link to="/details">Show More</Link>
                    </Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )} />
        <Route exact path="/details" component={WorkerDetails} />
        </div>
        <div className="row">
        <Route exact path="/" render={props => (
            <React.Fragment>
                <Card style={{maxWidth:'355px'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image="https://i.ibb.co/6cSrrcR/29804756-e4ba-4b07-b310-b226962c60f7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <h2>{this.state.description}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{border:'20px'}}>
                        <Link to="/details">Show More</Link>
                    </Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )} />
        <Route exact path="/details" component={WorkerDetails} />

        <Route exact path="/" render={props => (
            <React.Fragment>
                <Card style={{maxWidth:'355px'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image="https://i.ibb.co/6cSrrcR/29804756-e4ba-4b07-b310-b226962c60f7.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <h2>{this.state.description}</h2>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{border:'20px'}}>
                        <Link to="/details">Show More</Link>
                    </Button>
                </CardActions>
            </Card>
            </React.Fragment>
        )} />
        <Route exact path="/details" component={WorkerDetails} />
        </div>
    </Router> 
    
  );

   }
 }
export default WorkersCards;





  









  

