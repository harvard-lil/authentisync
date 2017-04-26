var React = require('react');
var ReactDOM = require('react-dom');

var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

class MainInterface extends React.Component {

  	constructor(props, context) {
    	super(props, context);
    	this.state = {
     		inputFiles: [],
    	};
	}

	render() {
		return(
			<h1>Authentisync File Moving</h1>
		);
	}
}

ReactDOM.render(
	<MainInterface />,
	document.getElementById('fileAppContainer')
);