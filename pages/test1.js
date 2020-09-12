import { Component } from 'react'
import PageHead from '../components/PageHead'
import { Link } from '../server/routes.js'

class Test1 extends Component {

    static async getInitialProps ({ store, isServer, pathname, query }) {
        return { isServer, pathname, query }
    }

    constructor (props) {
        super(props)
    }

    render () {

        return <main>
        <PageHead
            title='Next.js (React) + Express REST API + MongoDB + Mongoose-Crudify boilerplate'
            description='Demo of nextjs-express-mongoose-crudify-boilerplate'
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

        </main>
    }
}

export default Test1
