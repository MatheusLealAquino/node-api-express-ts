import app from './app'

const port = 3000;

app.listen(port, () => {
  console.warn(`App listening on port ${port}`);
  console.warn(`Started At: ${new Date()}`);
});
