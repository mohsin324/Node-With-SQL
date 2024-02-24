const mssql =  require('mssql');
// sql configuration
let sqlConfig = {
    user: 'sa',
    password: '12345',
    server: 'localhost',
    database: 'Chthonic',
    port: 1433,
    options: {
        trustServerCertificate: true,
    },
    pool:{
        // max time require to wait for get new connection 
        acquireTimeoutMillis: 3000,
        // max amount of time to take new create connection
        createTimeoutMillis: 3000,
        // max time to close the new connection
        destroyTimeoutMillis: 30000,
        // max amount of time for connection to remain in idle
        idleTimeoutMillis: 30000,
        // frequency of idle connection to reap operation, to look close idle connection
        reapIntervalMillis: 10000,
        // if initial connection failed, it will retry to connect
        createRetryIntervalMillis: 200,
        // propagate/throw error that occurs while creating new connection
        propagateCreateError: true,
        // min number of connected clients, even if they are idle 
        min: 0,
        // max number of connected clients at any times
        max: 10
    }
}
// connection pool
const getConn = async function (name, firstName){
    try{
        const connPool = new mssql.ConnectionPool(sqlConfig);
        const response = await connPool.connect();
        // console.log(response);
        let query =  await response.query(`insert into Table_1 (Name, LastName) values ('${name}', '${firstName}')`);
        mssql.close();
        return query

    }catch(err){
        console.log(err)
        mssql.close();
    }
}
module.exports = {
    getConn
}
