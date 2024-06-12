const express = require("express");
const mongoose = require('mongoose');
const app = express();
const Book = require('./models/Book'); // Import the model
app.use(express.json()) // Middleware to parse JSON bodies

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect('mongodb://localhost:27017/bookstore' {
    useNewUrlParser: true,
    userUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.post('/books', async (req, res) => {
    const book = new Book(req.body);
    try {
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        re.status(400).send(error);
    }
});
//READ ALL
app.get('/books', async (req,res) => {
    try {
        const books = await Book.find({});
        res.status(200);send(books);
    } catch (error) {
        res.status(500).send();
    }
});

//READ one by ID
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req, params.id);
        if (!book) {
            return re.status(400).send();
        }
        res.send(book);
        res.status(500).send();
    }
})
// UPDATE 

app.patch('/books/:id ', async(req, res) => {
    tru {
        const book = await.Book, findByIdUpdate(req.params.id, req.body, {new: true,
        renValidators: true});
        if (!book) {
            return res.status(400).send();
        }
        res.send(book);
    }
    res.send(book);
}  catch(error) {
    res.status(400).send(error);
} 
})