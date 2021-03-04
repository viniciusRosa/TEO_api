import app from './server';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

app.use('/api', routes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Run on port ${process.env.SERVER_PORT}`);
});