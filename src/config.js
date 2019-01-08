const config = {
	encryption: {
		key: 'SECRET_KEY',
		iv: '9De0DgMTCDFGNokdEEial'
	},
	whisper: {
		enode: "enode://015e22f6cd2b44c8a51bd7a23555e271e0759c7d7f52432719665a74966f2da456d28e154e836bee6092b4d686fe67e331655586c57b718be3997c1629d24167@35.226.21.19:30504",
		wsProvider: "ws://localhost:8546",
		httpProvider: "http://104.197.46.74:8545",
		topic: "topic1"
	},
	mailservers: {
		"mail-01.ac-cn-hongkong-c.eth.beta": "enode://da61e9eff86a56633b635f887d8b91e0ff5236bbc05b8169834292e92afb92929dcf6efdbf373a37903da8fe0384d5a0a8247e83f1ce211aa429200b6d28c548@47.91.156.93:30504", 
		"mail-01.do-ams3.eth.beta": "enode://c42f368a23fa98ee546fd247220759062323249ef657d26d357a777443aec04db1b29a3a22ef3e7c548e18493ddaf51a31b0aed6079bd6ebe5ae838fcfaf3a49@206.189.243.162:30504", 
		"mail-01.gc-us-central1-a.eth.beta": "enode://7de99e4cb1b3523bd26ca212369540646607c721ad4f3e5c821ed9148150ce6ce2e72631723002210fac1fd52dfa8bbdf3555e05379af79515e1179da37cc3db@35.188.19.210:30504", 
		"mail-02.ac-cn-hongkong-c.eth.beta": "enode://744098ab6d3308af5cd03920aea60c46d16b2cd3d33bf367cbaf1d01c2fcd066ff8878576d0967897cd7dbb0e63f873cc0b4f7e4b0f1d7222e6b3451a78d9bda@47.89.20.15:30504", 
		"mail-02.do-ams3.eth.beta": "enode://7aa648d6e855950b2e3d3bf220c496e0cae4adfddef3e1e6062e6b177aec93bc6cdcf1282cb40d1656932ebfdd565729da440368d7c4da7dbd4d004b1ac02bf8@206.189.243.169:30504", 
		"mail-02.gc-us-central1-a.eth.beta": "enode://015e22f6cd2b44c8a51bd7a23555e271e0759c7d7f52432719665a74966f2da456d28e154e836bee6092b4d686fe67e331655586c57b718be3997c1629d24167@35.226.21.19:30504", 
		"mail-03.ac-cn-hongkong-c.eth.beta": "enode://74957e361ab290e6af45a124536bc9adee39fbd2f995a77ace6ed7d05d9a1c7c98b78b2df5f8071c439b9c0afe4a69893ede4ad633473f96bc195ddf33f6ce00@47.52.255.195:30504", 
		"mail-03.do-ams3.eth.beta": "enode://8a64b3c349a2e0ef4a32ea49609ed6eb3364be1110253c20adc17a3cebbc39a219e5d3e13b151c0eee5d8e0f9a8ba2cd026014e67b41a4ab7d1d5dd67ca27427@206.189.243.168:30504", 
		"mail-03.gc-us-central1-a.eth.beta": "enode://531e252ec966b7e83f5538c19bf1cde7381cc7949026a6e499b6e998e695751aadf26d4c98d5a4eabfb7cefd31c3c88d600a775f14ed5781520a88ecd25da3c6@35.225.227.79:30504"
	},
	corsProxy: "https://cors-anywhere.herokuapp.com/"
}

export default config
