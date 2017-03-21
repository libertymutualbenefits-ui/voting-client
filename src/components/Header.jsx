import React from 'react';
import '../base.css';

const pageTitle = "Pet World";

export default React.createClass({

  render: function() {
    return <header className="header">
      <h1>{pageTitle}</h1>
    </header>;
  }
});
