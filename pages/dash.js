import { Component } from 'react'
import { Link } from '../server/routes.js'
import PageHead from '../components/PageHead'
import DataFetcher from '../components/DataFetcher'


class Dash extends Component {

    static async getInitialProps ({ store, isServer, pathname, query }) {
        return { isServer, pathname, query }
    }

    constructor (props) {
        super(props)
    }

    render () {

        return (
        
        <main>
            
            <PageHead
                title='Dashboard'
                description='A market analysis dashboard which tracks different data sets in order to give 
                traders a more complete overview of the factors that affect the entire market'
            />

            <h1>Market Analysis</h1>

            <h3>Results from TLT query:</h3>



        </main>

        )
    }
}

export default Dash
