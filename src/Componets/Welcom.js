import React,{Component} from 'react';

class Welcome extends Component{
    render() {
        const { name, heroName } = this.props;
        return (
            <h1>
                <p>Welcom {name}</p>
                <p>Your amazing hero is  {heroName}</p>
            </h1>


        );
    }

}

export default Welcome;