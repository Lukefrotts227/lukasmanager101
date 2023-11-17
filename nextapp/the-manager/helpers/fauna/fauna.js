import * as Fauna from 'faunadb'; 

const client = new Fauna.client({
    secret: process.env.FAUNA_SECRET, 
    scheme: 'https', 
    domain: 'db.us.fauna.com',
    port: 443, 
})
export default client;