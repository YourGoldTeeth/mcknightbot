// *****SETUP*****

// console start message
console.log('bot online');
// dependencies
var Twit = require('twit');
// pulls in keys
var config = require('./config');
// sets up new twit class using keys
var T = new Twit(config);
// // set up a user stream
// var stream = T.stream('user');

// *****CODE*****

// set interval to run tweetit function. time is in milliseconds.
// 1000 is one s * 60 is one minute * 60 is one hour
// setInterval(tweetIt, 1000*60*60)

// SETTING STATUS VARIABLES
var status_one = 'one, you\'re like a:'
var status_two = 'two, just want to:'
var status_three = 'three, girl it\'s plain to see that:'
var status_four_one = 'four, repeat steps one through three. (one:)'
var status_four_two = 'four, repeat steps one through three. (two:)'
var status_four_three = 'four, repeat steps one through three. (three:)'
var status_five = 'five, make you fall'
var status_six = 'i believe my job is done, now i\'ll start back at ooooooone. ye he ye yeah.'

var status_arr = [status_one, status_two, status_three, status_four_one, status_four_two, status_four_three, status_five]

// SETTING SEARCH VARIABLES
var params_one = { 
	q: '"dream come true"',
}

var params_two = { 
	q: '"be with you"', 
}

var params_three = { 
	q: '"you\'re the only one for me"', 
}

var params_five = { 
	q: '"in love with me"', 
}

var queries = [params_one, params_two, params_three, params_one, params_two, params_three, params_five]

i = 0

// TIME THE TWEETS
setInterval(tweetIt, 1000*60*30)

// SETS SEARCH/TWEET IN MOTION
function tweetIt() {

	T.get ('search/tweets', queries[i], parse);

	function parse(err, data, response) {
		var tweets = data.statuses;
		var rtId = tweets[0].id_str;
		var rtUser = tweets[0].user.screen_name;

			T.post('statuses/update', { status: status_arr[i] + ' https://twitter.com/' + rtUser + '/status/' + rtId }, add_i)

			{
				console.log(data);
			};

			function add_i() {
				i = i + 1;

				if (i == 7) {
				    i = 0;
				} 
			}	
	}
}
	// }
		


		// T.post('statuses/retweet/:id', { id: rtId } , function (err, data, response) {
		// 		console.log(data)
		// })
		// for (var i = 0; i < tweets.length; i++) {
		// console.log("\n" + 'number ' + i + "\n" + tweets[i].text) + "\n" + "\n";}
// }




