import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
const Header = ({ whisper }) => (
  <header className="App-header">
    <h1>Dawn</h1>
    <span className="public-key">
      Your Public Key: {whisper.statusDetails.publicKey}
    </span>
    <br />
    <span className="public-key">
      Your Username: {whisper.statusDetails.username}
    </span>
  </header>
);

const mapStateToProps = state => ({
  whisper: state.whisper,
});

Header.propTypes = {
  whisper: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Header);
