import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import Toggle from '../reusable/ToggleRPC';
import Identicon from '../../features/account/Identicon';

// Material-UI
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: 'right',
    'z-index': 10,
  },
  input: {
    display: 'none',
  },
});

function IdenticonButton(props) {
  const { classes, onClick } = props;
  return (
    <div>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={onClick}
              className={classNames(classes.button)}
            >
              <Identicon />
            </IconButton>
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

IdenticonButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IdenticonButton);
