import React from 'react';
import {TextField, Button} from '@material-ui/core'
import App from './App';
import News from './NewsComponent'

// const baseUrl = "";

const RenderNews = (props) => {
    if(props.isPreeti){
        return(
            <App />
        );
    } else {
        return(
            <News />
        )
    }
}


class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isPreeti: true
        }
        this.toggleIsPreeti = this.toggleIsPreeti.bind(this);
    }

    toggleIsPreeti(){
        this.setState((prevState) => ({
            isPreeti: !prevState.isPreeti,
        }))
    }

    render(){
        
        return(
            <>
                <Button 
                variant="contained" 
                color="secondary" 
                onClick={this.toggleIsPreeti}
                style={{margin: '20px'}}
                > Toggle </Button><br></br>
                <RenderNews isPreeti={this.state.isPreeti} />
            </>
        )
    }
}

export default Main;