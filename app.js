require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

// connect DB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

// // routers
const authRouter = require('./routes/auth')
const questionsRouter = require('./routes/questions')
const rolesRouter = require('./routes/roles')
const castingsRouter = require('./routes/castings')
const applicationsRouter = require('./routes/applications')
const roleQuestionsRouter = require('./routes/roleQuestions')
const castingQuestionsRouter = require('./routes/castingQuestions')
const castingRolesRouter = require('./routes/castingRoles')
const cloudinaryRouter = require('./routes/cloudinary')

// // error handler
// const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15,
    max: 100
}))
app.use(express.json());
app.use(helmet())
app.use(cors());
app.use(xss())

// routes
app.get('/', (req, res) => {
  res.send('casting-forms-api');
});


app.use('/api/v1/cloudinary-upload', cloudinaryRouter )
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/questions', questionsRouter)
app.use('/api/v1/roles', rolesRouter)
app.use('/api/v1/castings', castingsRouter)
app.use('/api/v1/applications', applicationsRouter)
app.use('/api/v1/roleQuestions', roleQuestionsRouter)
app.use('/api/v1/castingQuestions', castingQuestionsRouter);
app.use('/api/v1/castingRoles', castingRolesRouter)

// app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI, { useNewURLParser: true })
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();