import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'locahost'


app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, host, () => {
    console.log(`Server is runnng at ${port}...`);
})