import React from 'react'

/*
function WorkerDetails(props)
{
    console.log(props.id);
    return(
        <div>
            <h1>{props.id} hello</h1>
        </div>
    );
};
export default WorkerDetails;
*/
export class WorkerDetails extends React.Component{

    render(){
        console.log("here")
        console.log(this.props.match.params.id)
        return(
            <div>
                <h1> {this.props.match.params.id} hello</h1>
            </div>
        );
    }
}