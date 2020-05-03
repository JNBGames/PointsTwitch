var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "jnbgames24mg",
		password: "oauth:zfm5tp0uas3k1j3y9m7a1btqct0mdl",  
	},
	channels: ['#gaules', '#inr1tv', '#marcobc', '#murilo_rt', '#jeffaocs', '#pescocofino', '#csrfps', '#mibrtv', '#marcaorx', '#sheviiioficial', '#brnwowzk1', '#gabepeixe', '#stev3z', '#Vovo', '#furiatv', '#narigafps', '#stereonline', '#skipnho', '#skipnholive', '#saullo', '#mch_agg', '#johnpittertv', '#UmBrinquedo', '#nemshow97', '#recruta_xnavyzzz', ] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
