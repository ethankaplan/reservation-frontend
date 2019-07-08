import React, {Component} from 'react'

import {Grid, Image, Container} from 'semantic-ui-react'


class Landing extends Component{
    


    render(){
        return(
            
        <Container textAlign='center' style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Grid columns={2} floated="left" padded>
                <Grid.Column>
                
                    <Grid.Row>
            <h2 style={{margin:'0'}}>Make a Date</h2>
                <small>a date building application</small> <br/><br/>You can register/login, then navigate
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
            </Container>
            
        )
    }

}

export default Landing