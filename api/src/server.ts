import ora from 'ora';
import app from './app';

app.listen(3333, () => {
  ora('Server Running').succeed();
});
