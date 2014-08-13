module.exports = {
	interval: 1000,

	logentries: {
		token: null
	},

	monitor: {

		ping: [
			{
				url: 'https://likeastore.com'
			},
			{
				url: 'https://stage.likeastore.com'
			}
		],

		json: [
			{
				url: 'https://app.likeastore.com/api/monitor',
				response: {
					"app":"app.likeastore.com",
					"env":"production",
					"version":"0.0.52",
					"apiUrl":"/api"
				}
			}
		],

		mongo: [
			{
				connection: 'mongodb://localhost:27017/likeastoredb',
				collections: ['users'],
				query: function (db, callback) {
					db.users.findOne({email: 'alexander.beletsky@gmail.com'}, callback);
				}
			}
		]

	},

	// notification options
	notify: {
		email: {
			to: 'devs@likeastore.com'
		},

		sms: {
			to: ['+3805551211', '+3805551212']
		}
	},

	transport: {
		mandrill: {
			token: null
		},

		twilio: {
			token: null
		}
	}
};
