app.get('/file', (req, res) => {
  res.sendFile('/uploads/' + req.query.name);
});
