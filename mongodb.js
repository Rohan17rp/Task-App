const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true  }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    //Insert data to database
    db.collection('task').insertMany([
        {
            description: "first_task",
            completed: true
        },
        {
            description: "second_task",
            completed: false
        },
        {
             description: "third_task",
            completed: true
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert tasks')
        }
        console.log(result.ops)
    })

    //Search data in database
    db.collection('task').findOne({completed: true}, (error, task) => {
        console.log(task)
    })

    db.collection('task').find({completed: true}).toArray((error, task) => {
        console.log(task)
    })
})


 
