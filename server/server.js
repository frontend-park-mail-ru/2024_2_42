'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public', { fallthrough: true }));
app.use(express.static('./node_modules'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log(`Server listening on port ${port}`);
});
