const routes = require('next-routes')
const routesImplementation = routes()

routesImplementation.add('/dash', 'dash')
routesImplementation.add('/more/:slug', 'index')
routesImplementation.add('/test1', 'test1')
routesImplementation.add('/:slug', 'index')

module.exports = routesImplementation

// Usage inside Page.getInitialProps (req = { pathname, asPath, query } = { pathname: '/', asPath: '/about', query: { slug: 'about' } })
