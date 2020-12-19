const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer(async (req, res) => {
	if( req.url !== "/") {
	  res.writeHead(404, {'Content-Type': 'text/plain'});
		return;
	}
	await sleep(1000); // sleep for 1 sec
  console.log(`http hit after 1 sec ${req.url}`);
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
  const today = new Date();
	res.write(`Last cached in ${today.toString()}`);
	res.end();
}).listen(PORT);

console.log(`Running server in ${PORT}`);

function sleep(ms) {
  return new Promise(res => {
	  setTimeout(res, ms);
	})
}


