import React from 'react';
import PropTypes from 'prop-types';

// Components
import UploadCard from '../upload';
import TableContainer from '../download';
import Header from '../../components/header/Header';

// Metamask 
import ConnectMetamaskContainer from '../../features/account/ConnectMetamaskContainer';

// Whisper
import Whisper from '../whisper';

class HomepageContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="flex-vertical">
          {/* Vertical Flex - for Header, Content */}
          <Header />
          <div className="flex-horizontal">
            {/* Horizontal Flex - for Transfer, Messages */}

            {/* Left Half of Page */}
            <div className="container transfer">
              <UploadCard />
              <ConnectMetamaskContainer />
            </div>

            {/* Right Half of Page */}
            <div className="container messages">
              <TableContainer />
              <Whisper />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageContainer;
