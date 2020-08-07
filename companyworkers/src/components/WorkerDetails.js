import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Layout } from './Layout';
import firebase, {config_fire} from './Firebase';

export class WorkerDetails extends React.Component{

    constructor() {
        super();
        
        this.state = {
            name:'',
            role:'',
            age:'',
            department:'',
            image:''
        };
    }

    async componentDidMount(){

        let id = (Number(this.props.match.params.id) + Number(1));
        
        try{
            await firebase.app().delete();
            await firebase.initializeApp(config_fire);
        } catch(err){
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error raised', err.stack)
                }
        }
        // await firebase.app().delete();
        // await firebase.initializeApp(config_fire);
        var database = firebase.database();
        const rootRef = database.ref().child('workers');
        
        rootRef.on("value", (snapshot) => {
            console.log("snap is " + snapshot.val());
            this.setState({
                name : snapshot.val()[id].Name,
                age  : snapshot.val()[id].Age,
                department : snapshot.val()[id].Department,
                image : snapshot.val()[id].Image,
                role : snapshot.val()[id].Role
            })
        },function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    render(){
        return(
            <div className="data"> 
            <Layout>
            <Card style={{maxWidth:'355px'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="auto"
                width="auto"
                image={this.state.image}
                title="Contemplative Reptile"
                />
                <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             <h1>שם: {this.state.name}</h1>   
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h2>גיל: {this.state.age}</h2>
            <h2>תפקיד: {this.state.role}</h2>
            <h2>מחלקה: {this.state.department}</h2>
            </Typography>
        </CardContent>
            </CardActionArea>
            <CardActions> 
            </CardActions>
        </Card>
        </Layout>
        </div>    
        );
    }
}