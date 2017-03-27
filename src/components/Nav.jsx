import React from 'react';
import '../base.css';

export default React.createClass({
  render: function() {
    return <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/petlist">My Pets</a></li>
        <li><a href="/buy">Buy</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>;
  }
});
