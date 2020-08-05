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
import {WorkerDetails} from './WorkerDetails'
import * as firebase from 'firebase';





class WorkersCards extends Component {

    constructor() {
        super();
        
        this.state = {
        workers : [{
            name:'',
            role:'',
            age:'',
            department:'',
            image:''
        }], 
        };
        
    }
    componentDidMount(){
        $("Button").click( () => {
            return <WorkerDetails />         
        })
       
             var database = firebase.database();
             const rootRef = database.ref().child('workers');
             
            rootRef.on("value", (snapshot) => {
                let nameList = [];
                for(var i=1;i<6;i++){
                    console.log(snapshot.val()[i])
                    nameList.push({
                        name : snapshot.val()[i].Name,
                        age  : snapshot.val()[i].Age,
                        department : snapshot.val()[i].Department,
                        image : snapshot.val()[i].Image,
                        role : snapshot.val()[i].Role
                    });
                }
                this.setState({ ...this.state, workers: nameList }, 
                    ()=>{console.log(this.state.names)}
                );
                console.log(this.state.names)
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            }
            );
           

        
    }
  
  


   render() {
       const items = []
       console.log(items.length)
       for(var i=0; i <this.state.workers.length;i++){
           items.push(
              <div> 
            <Card style={{maxWidth:'355px'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="auto"
                width="auto"
                image={this.state.workers[i].image}
                title="Contemplative Reptile"
                />
                <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {this.state.workers[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h2>{this.state.role}</h2>
            </Typography>
        </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" style={{border:'20px'}} >
                    <Link id={i} to={"/details/"+ i}>לעוד פרטים</Link>
                    {/* {this.state.pass ? <WorkerDetails name={this.state.workers[i].name}/> : null} */}
            </Button>   
            </CardActions>
        </Card>

        </div>    
           )
       }
   return (
    <Router>  
        <div className="row">
        <Route exact path="/" render={props => (
            <React.Fragment>
                
                    {items[0]}

            </React.Fragment>
        )} />
        

        <Route exact path="/" render={props => (
            <React.Fragment>
                
                    {items[1]}

            </React.Fragment>
        )} />
        

        <Route exact path="/" render={props => (
            <React.Fragment>
                
                    {items[2]}

            </React.Fragment>
        )} />
        
        </div>
        <div className="row">
        <Route exact path="/" render={props => (
            <React.Fragment>
                
                    {items[3]}

            </React.Fragment>
        )} />
        

        <Route exact path="/" render={props => (
            <React.Fragment>
               
                    {items[4]}

            </React.Fragment>
        )} />
        
        
        </div>
        <Route exact path="/details/:id" component={WorkerDetails} />
    </Router> 
    
  );

   }
 }
export default WorkersCards;





  









  

