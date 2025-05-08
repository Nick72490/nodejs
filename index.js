import express from 'express';
import chalk from 'chalk';
const app = express();
const PORT =3000;

app.get('/', (req, res) => {
    res.send('jo!');
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on http://localhost:${PORT}`));
    console.log(chalk.green('Server started successfully!'));
    console.log(chalk.red('This is a red message!'));
    console.log(chalk.yellow('This is a yellow message!'));
    console.log(chalk.cyan('This is a cyan message!'));
}
);