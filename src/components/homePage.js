"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div className = "jumbotron">
				<h1> React One: Administrator</h1>
				<p> React,React Router and FLux for web apps </p>
			</div>
		);
	}
});

module.exports = Home;