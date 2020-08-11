import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import classes from './Content.css'
import {Grid} from '@material-ui/core'

class content extends Component{

    state={
        posts: []
    }

    componentDidMount(){
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=c0a2a0f77d8947a19d48519d7208e876')
          .then(Response => {
                this.setState({posts : Response.data.articles})
                
          })
        }

    

    render(){

        const posts = this.state.posts.map(post => {
            return (
                <Grid item xs={12} sm={4}>
                    <Post 
                    title={post.title}
                    imgURl={post.urlToImage}
                    desc={post.description}/>
                </Grid>)
        })
        return(
                <div className={classes.ContentWrapper}>
                    <Grid container spacing={4}>
                        
                        {posts}
                    </Grid>
                </div>
                
            
        )
    }
}

export default content
