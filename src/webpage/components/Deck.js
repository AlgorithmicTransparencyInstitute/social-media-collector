import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children }) => <div className="card-deck">{children}</div>;
Deck.displayName = 'Deck';

Deck.propTypes = {
  children: PropTypes.node.isRequired
};

export default Deck;
