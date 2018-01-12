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
var stream = T.stream('user');

// *****CODE*****

// SETTING STATUS VARIABLES
var status_one = 'one, you\'re like a:'
var status_two = 'two, just want to:'
var status_three = 'three, girl it\'s plain to see that you\'re the :'
var status_four_one = 'four, repeat steps one through three. (one: you\'re like a:)'
var status_four_two = 'four, repeat steps one through three. (two: just want to:)'
var status_four_three = 'four, repeat steps one through three. (three: girl it\'s plain to see that:)'
var status_five = 'five, make you fall'
var status_six = 'i believe my job is done, now i\'ll start back at ooooooone. (ye he ye yeah).'

var status_arr = [status_one, status_two, status_three, status_four_one, status_four_two, status_four_three, status_five, status_six]

// SETTING SEARCH VARIABLES
var params_one = { 
	q: '"dream come true"',
}

var params_two = { 
	q: '"be with you"', 
}

var params_three = { 
	q: '"only one for me"', 
}

var params_five = { 
	q: '"in love with me"', 
}

var queries = [params_one, params_two, params_three, params_one, params_two, params_three, params_five]

// SETS INITIAL COUNT FOR CYCLING THROUGH QUERY AND STATUS ARRAYS
i = 0

// ENABLES FOLLOWUP ACTION FOR MENTION OF SCREENNAME
stream.on('tweet', tweetEvent)

function tweetEvent(eventMsg) {

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name

	console.log('replyto: ' + replyto + ' from: ' + from + ' text: ' + text);

	if (replyto === 'botatone' && text == '@botatone back at one') {
		var replytweet = '@' + from + ' thank you for believing that my work is done. i will now start back at ooooooone. (ye he ye yeah) ';
		T.post('statuses/update', {status: replytweet }, reset_i);
	}
	
	function reset_i() {
			i = 0
	}
}

// TIME THE TWEETS FOR EVERY TWO HOURS
setInterval(tweetIt, 1000*60*60*2)

// SETS SEARCH/TWEET IN MOTION
function tweetIt() {

	if ( i <= 6) {
		T.stream ('statuses/filter', { possibly_sensitive: false })

		T.get ('search/tweets', queries[i], parse);

		function parse(err, data, response) {
			var tweets = data.statuses;
			var rtId = tweets[0].id_str;
			var rtUser = tweets[0].user.screen_name;

				T.post('statuses/update', { status: status_arr[i] + ' https://twitter.com/' + rtUser + '/status/' + rtId }, add_i)

				{
					console.log(data);
				};
		}
		function add_i() {
			i++;
		}		
	} else
		T.post('statuses/update', { status: status_arr[i] }, reset_i)
		
		function reset_i() {
			i = 0
		}
}




