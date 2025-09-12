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

module.exports = { getAllBooks };
