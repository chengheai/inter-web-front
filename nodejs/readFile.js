const fs = require('fs');
fs.readFile('/Users/chengheai/.ssh/id_rsa.pub', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(data);
});
