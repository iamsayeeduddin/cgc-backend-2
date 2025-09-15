let books = [
  {
    id: 1,
    name: "HTML & CSS",
    price: 250,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 400,
  },
  {
    id: 3,
    name: "Backend with Node & Express JS",
    price: 600,
  },
];

const getAllBooks = (req, res) => {
  res.status(200);
  if (req.url.includes("allBooks")) {
    res.json(books);
  } else {
    res.send(books[0].name);
  }
};

const addBook = (req, res) => {
  let data = req.body;
  let newBook = {
    id: books[books.length - 1].id + 1,
    ...data,
  };
  books.push(newBook);
  res.status(201).json({ message: "Book Added Successfully!", books });
};

const updateBook = (req, res) => {
  let bookId = +req.params.id;
  let data = req.body;

  let idx = books.findIndex((val) => val.id === bookId);
  if (idx > -1) {
    books[idx] = {
      id: bookId,
      name: data.name,
      price: data.price,
    };
    res.status(200).json({ message: "Book Updated Successfully!", books });
  } else {
    res.status(400).json({ message: "Book not found!" });
  }
};

const patchBook = (req, res) => {
  let bookId = +req.params.id;
  let data = req.body;

  let idx = books.findIndex((val) => val.id === bookId);
  if (idx > -1) {
    books[idx] = {
      ...books[idx],
      ...data,
    };
    res.status(200).json({ message: "Book Updated Successfully!", books });
  } else {
    res.status(400).json({ message: "Book not found!" });
  }
};

const deleteBook = (req, res) => {
  let bookId = +req.params.id;

  let idx = books.findIndex((val) => val.id === bookId);
  if (idx > -1) {
    books.splice(idx, 1);
    res.status(200).json({ message: "Book Deleted Successfully!", books });
  } else {
    res.status(400).json({ message: "Book not found!" });
  }
};

module.exports = { getAllBooks, addBook, updateBook, patchBook, deleteBook };
