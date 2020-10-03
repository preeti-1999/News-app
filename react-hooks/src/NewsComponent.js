import React from 'react';
import {TextField, Button, Typography, GridList, Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// const baseUrl = "";

const NewsCard = (props) => {
    var date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(props.data.created_at)))
    return(
        <Grid xs={12} sm={6} lg={4}>
            <Card style={{textAlign: 'left', height: '4cm', margin:"0.5cm"}} >
                <CardContent>
                    <Typography><strong>Title : </strong>{props.data.title}</Typography>
                    <Typography ><strong>Author : </strong> {props.data.author}</Typography>
                    <Typography><strong>Date : </strong>{date}</Typography>
                    <Typography><strong>Points : </strong>{props.data.points}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

class News extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news : [],
            query : 'corona'
        }
        this.fetchNews = this.fetchNews.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        console.log(" News Component Mounted")
        this.fetchNews();
        console.log(this.state.news)
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    fetchNews = async () => {
        await fetch(`https://hn.algolia.com/api/v1/search?query=${this.state.query}`)
        .then(result => result.json())
        .then(data => this.setState(state => ({
            news: data.hits
        })))
        .catch(error => console.log(error));
        console.log(this.state.news)
    }

    render(){
        
        
        return(
            <>
                <div
                
                >
                    <TextField 
                    id="outlined-basic" 
                    label="search" 
                    variant="outlined"
                    onChange={this.handleChange}
                    style={{
                        backgroundColor: 'white'
                    }}
                    />
                    <Button 
                    variant="contained" 
                    color="primary" 
                    style={{marginLeft: 10, height: "1.5cm"}}
                    onClick={this.fetchNews}
                    >
                    Search
                    </Button>
                </div>
                <div style={{padding: '20px', textAlign: 'center'}}>
                    <Grid container spacing={4} >
                    {this.state.news.length > 0 ? this.state.news.map((data, index) => (<NewsCard key={index} data={data} />)) : <>No News, refresh your internet connection</>}
                    </Grid>
                </div>
            </>
        )
    }
}

export default News;