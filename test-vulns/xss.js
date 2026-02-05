app.get('/search', (req, res) => {
  res.send("<h1>" + req.query.q + "</h1>");
});

