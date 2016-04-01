import React from 'react';
import ReactDOM from 'react-dom';

let Row = React.createClass({
    render: function() {
        return <div>Hola {this.props.name}</div>;
    }
});

ReactDOM.render(<Row name="Nicole"/>, document.getElementById('app'));
