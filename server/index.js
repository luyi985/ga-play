import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Server is runnng at ${port}...`);
})