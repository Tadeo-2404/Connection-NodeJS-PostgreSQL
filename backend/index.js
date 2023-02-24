import express from 'express';
import client from './db.js';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world')
});

try {
    await client.connect();
    console.log('connect to db successsfully');

    const result = await client.query({
        rowMode: 'array',
        text: 'SELECT * FROM agenda',
      })
      console.log(result.rows);
      await client.end()
} catch (error) {
    console.log(error)
}


app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
})