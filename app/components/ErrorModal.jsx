import React from 'react'

var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = Foundation.Reveal($('#errorModal'));
    modal.open();
  },
  render: function(){
    return(
      <div className="reveal" id="errorModal" data-reveal>
        <h1>Error</h1>
        <p className="lead">Our message</p>
        <button className="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
});

module.exports = ErrorModal;
