app.post('/run', (req, res) => {
  eval(req.body.code);
});
