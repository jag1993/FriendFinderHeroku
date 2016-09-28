var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app){
app.post('/api/friends', function (req, res) {
	var newFriend = req.body;
	var newFriendScores = newFriend.scores;
	var newFriendConvArr = newFriendScores.map(Number);
	var numbers = newFriendConvArr;
	var count = 0;
	var sum = numbers.reduce(getSum);


function getSum(total, num) {
  		return total + num;
	}

	req.body.scores = newFriendConvArr;
	friends.push(newFriend);
	console.log(friends);
	

	for(i=0;i<friends.length;i++){
	 var thing = Math.abs(sum - friends[i].scores.reduce(getSum));
		if(thing<3){
		count ++;
		}

	}

	if(count >= friends.length){
	count -=1;
	}	

	res.json(friends[count]);

});

app.get('/api/show', function (req, res) {		
var html;
	html += '<ul>';
		for (var i = 0; i < friends.length; i++) {
			html += '<li><p> Name: ' + friends[i].name + '</p>' + ' </li>';
			html += '<p>' + '<img src='+friends[i].photo+ '>' + ' </li>'+'</p>';
		}

		html += '</ul>';
		res.send(html);
});
}



