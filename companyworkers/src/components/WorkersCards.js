import React, {Component} from 'react';
//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
//import {Link} from 'react-router-dom'
//import { Button } from "@material-ui/core";
import $ from 'jquery'
//import Typography from '@material-ui/core/Typography';
import {WorkerDetails} from './WorkerDetails'
import * as firebase from 'firebase';
import {Layout} from './Layout';
import {Card, Button} from 'react-bootstrap';




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
     async componentDidMount(){
        
        

        
             var database = firebase.database();
             const rootRef = database.ref().child('workers');
             var t = this;
             await rootRef.on("value", (snapshot) => {
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
                    t.setState({ ...this.state, workers: nameList }, 
                        ()=>{console.log(this.state.names)}
    
                    );
                }
                /*
                this.setState({ ...this.state, workers: nameList }, 
                    ()=>{console.log(this.state.names)}

                );
                */
                console.log(this.state.workers)
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            }
            );
            
    }
  
    componentDidUpdate(){
        $(this.refs.btn).click(
            function (){
                window.location.href= `/details/${this.id}`;            
            });
    }


   render() {
       const items = []
       console.log(items.length)
       
       for(var i=0; i <this.state.workers.length;i++){
           items.push(
              <div> 
            <Card style={{height:"500px"}}>
            <Card.Img style={{maxHeight:'400px'}} variant= "top" bsPrefix='card-img' src={this.state.workers[i].image}/>
            <Card.Body>
                <Card.Title>{this.state.workers[i].name}</Card.Title>
            <Button className="button" ref={"btn"} id={i} style={{textAlign:'center'}}>
                לעוד פרטים
            </Button>
            </Card.Body>
           
        </Card>

        </div>    
           )
       }
       
   return (
    <Layout>
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
    </Layout>
    
  );

   }
   
 }
export default WorkersCards;





  









  

