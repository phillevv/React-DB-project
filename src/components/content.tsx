import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Content extends Component {
 
    render() { 

        return (

        <div className="Content">

                <div className="shadow-sm p-3 mb-5 bg-white rounded m-5">

                <div className="text-center">
                    <p>Hej</p>
                    <Button variant="success">Success</Button>
                </div>
                </div>
        </div>
        );
}
}

 
export default Content;