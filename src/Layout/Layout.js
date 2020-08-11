import React from 'react'
import Aux from '../Aux'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Health from '../RouterComponents/Health/Content/Content'
import {Route} from 'react-router-dom'

const layout = () => {
    return(
        <Aux>
            <div>
                <Header/>
            </div>
            <div>
                <Route path="/" exact component={Content}/>
                <Route path="/health"  component={Health}/>
            </div>
        </Aux>
    )
}

export default layout