const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    [{
        name: "Harry Potter and the Order of the Phoenix",
        img: "https://bit.ly/2IcnSwz",
        summary: "Harry Potter and Dumbledore's warning about the return of 
        Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
        undermine Dumbledore's authority at Hogwarts and discredit Harry."
    },{
        name:"The Lord of the Rings: The Fellowship of the Ring",
        img: "Https://bit.ly/2Pzczlb",
        summary: 'Adrift in space with no food or water, Tony Stark sends a 
        message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the
        remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- 
        must figure out a way to bring back their vanquished allies for an epic showdown 
        with Thanos -- the evil demigod who decimated the planet and the universe.'
    }
    }]
});
 const Book = mongoose.model('Book', bookSchema)


 module.exports = Book;