import React, {Component} from 'react'
import Register from '../Register/Register'
import DateBuilder from '../Builder/DateBuilder'
import {Grid, Image} from 'semantic-ui-react'


class Landing extends Component{
    


    render(){
        return(
            <div style={{marginLeft:'1em'}}>
            <Grid columns={2} floated="left" padded>
                <Grid.Column>
                
                    <Grid.Row>
            
                <h2>This is a date building application.</h2> <br/>You register/login, then navigate
            to the build tab. There, you enter in the location of the perspective date and two activities you want to do. 
            Right now it prompts for a single activity and a cuisine for dinner.<br/><br/>
            </Grid.Row>
            
            </Grid.Column>
            
            <Grid.Column>
                <div>
                    <Image 
                    size="medium"
                    centered
                    src='https://images-na.ssl-images-amazon.com/images/I/61g-F40blmL._SX425_.jpg' />
                </div>

            </Grid.Column>
            </Grid>
            </div>
        )
    }

}

export default Landing