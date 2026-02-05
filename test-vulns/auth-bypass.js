app.post('/admin/deleteUser', (req, res) => {
  if (req.user) {
    deleteUser(req.body.id);
  }
});
