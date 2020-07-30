import React from 'react'


function WorkerDetails(props)
{
    console.log(props.name);
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};
export default WorkerDetails;