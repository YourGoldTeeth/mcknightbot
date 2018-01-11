// *****SETUP*****

// console start message
console.log('bot booting up');
// dependencies
var Twit = require('twit');
// pulls in keys
var config = require('./config');
// sets up new twit class using keys
var T = new Twit(config);
// set up a user stream
var stream = T.stream('user');

// *****CODE*****

// set interval to run code. time is in milliseconds.
// 1000 is one ms * 60 is one minute * 60 is one hour
setInterval(tweetIt, 1000*60*60)

// *Follow*
// (if this event happens, run this function)
// stream.on('follow', followed);

// *Tweet*
// (if this event happens, run this function)
// stream.on('tweet', tweetEvent);


// 
// function followed(eventMsg) {
// 	var name = eventMsg.source.name;
// 	var screenName = eventMsg.source.screen_name;
// 	tweetIt('@' + screenName + ', thanks for the follow! If you ever believe this bot\s work is done, then tweet \'@botatone back at one\' and I\'ll start all over again from one!')
// }



// function tweetIt(txt) {
// 	var tweet = {
// 		status: txt
// 	}

	// T.post('statuses/update', tweet, tweeted)

// 	function tweeted(err, data, response) {
// 		if (err) {
// 			console.log('uh oh error')
// 		} else {
// 			console.log('it worked!')
// 		}
// 	}
// }	


// GET FUNCTIONS
	// var params_one = {
	// 	q: 'like a dream come true',
	// 	count: 5
	// }

	// var params_two = {
	// 	q: 'just want to be with you',
	// 	count: 5
	// }

	// console.log('one:')
	// T.get('search/tweets', params_one, gotData);

	// console.log('two:')

	// function gotData(err, data, response) {
	// 	var tweets = data.statuses;
	// 	for (var i = 0; i < tweets.length; i++) {
	// 		console.log(tweets[i].text);
	// 	}
	// }