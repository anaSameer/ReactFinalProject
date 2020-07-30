import React from 'react'


function WorkerDetails(props)
{
    console.log(props.Name);
    return(
        <div>
            <h1>{props.Name}</h1>
        </div>
    );
};
export default WorkerDetails;