import app from './server';
import dotenv from 'dotenv';

import SchoolRotes from './routes/schoolRotes';

dotenv.config();

app.use('/api', SchoolRotes);



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Run on port ${process.env.SERVER_PORT}`);
});