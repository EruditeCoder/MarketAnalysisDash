const routes = require('next-routes')
const routesImplementation = routes()

routesImplementation.add('/dash', 'dash')
routesImplementation.add('/:slug', 'index')
routesImplementation.add('/more/:slug', 'index')
routesImplementation.add('/test1/:slug', 'test1')

module.exports = routesImplementation

// Usage inside Page.getInitialProps (req = { pathname, asPath, query } = { pathname: '/', asPath: '/about', query: { slug: 'about' } })
