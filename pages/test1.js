import { Component } from 'react'
import PageHead from '../components/PageHead'
import MyChart from '../components/Chart'
import { Link } from '../server/routes.js'
import DataFetcher from '../components/DataFetcher'

export default class Test1 extends Component {

    static async getInitialProps ({ store, isServer, pathname, query }) {
        return { isServer, pathname, query }
    }

    constructor (props) {
        super(props)
    }

    render () {
        return <main>
        <PageHead
            title='Market Analysis Dash'
            description='Analyze these markets :)'
        />
        <h1>Kittens</h1>
        <h2>Routing</h2>
        <p>Current page slug: {this.props.query.slug}</p>
        <p>Current page path: {this.props.pathname}</p>
        <p>Current page is rendered serverside: {this.props.isServer.toString()}</p>
        <ul>
            <li><Link route='/about'><a>About</a></Link></li>
            <li><Link route='/more/contact'><a>Contact</a></Link></li>
        </ul>

        <MyChart
            chartData={DataFetcher.BARFetcher()}
            title={'20yr Treasury Bond ETF'}
            dataRoot={'results'}
            xValue={'tradingDay'}
            yValue={'open'}
        >
        </MyChart>
        
        </main>
    }
}
