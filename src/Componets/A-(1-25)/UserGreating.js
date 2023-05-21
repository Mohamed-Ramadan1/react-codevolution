import React from 'react';


class UserGreating extends React.Component{
    constructor () {
        super();
        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        // this.state.isLoggedIn && <div>Hello Mohamed</div>;
        
        return (
            this.state.isLoggedIn ?
                <div>Hello Mohamed</div> :
                <div>Welcome Guest</div>
        )
        // let message
        // if (this.state.isLoggedIn) {
        //         message=<div>Hello Mohamed</div>
            
        // } else {
        //     message= <div>Welcome Guest</div>
        // }

        // return message
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Hello Mohamed</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Hello Mohamed</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // );
    }
}

export default UserGreating;