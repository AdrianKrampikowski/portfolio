import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// OwnServer
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://test:test_123@test.0h2phs8.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB', err);
// });

// // Define a schema and model for users
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const User = mongoose.model('User', userSchema);

// // Define API routes
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// app.post('/users', async (req, res) => {
//     const user = new User(req.body);
//     try {
//         await user.save();
//         res.status(201).send(user);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
