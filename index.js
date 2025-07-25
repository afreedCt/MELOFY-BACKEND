const jsonserver=require('json-server')

const mpServer=jsonserver.create()
// opening all middlewares (cors,etc)
const middleware=jsonserver.defaults()
// path to data.json(datbase)
const route=jsonserver.router('data.json')
// PORT from webserice || 3000
const PORT=process.env.PORT || 3000

// using all middleares
mpServer.use(middleware)
mpServer.use(route)

// calling the server
mpServer.listen(PORT,()=>console.log(`server running in ${PORT}`))