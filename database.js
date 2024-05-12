const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/icloset';

const dbName = 'icloset';

const client = new MongoClient(url);

async function createUser(user) {
    try {
        console.log('Creating user:', user);
        await client.connect();

        console.log("Connected correctly to server");

        const db = client.db(dbName);

        const collection = db.collection('usuarios');

        let result = await collection.insertOne(user);
        console.log("Inserted user into the 'users' collection:", result.insertedId);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

async function findUser(email, password) {
    try {
        await client.connect();

        const db = client.db(dbName);

        const collection = db.collection('usuarios');

        let user = await collection.findOne({ email: email, password: password });

        return user;
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection to the MongoDB server
        await client.close();
    }
}
module.exports = {
    createUser,
    findUser
};