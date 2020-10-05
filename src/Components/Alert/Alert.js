import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
// npm install react-jss
/*import { createUseStyles } from 'react-jss';

const colors = {
  success: '#6da06f',
  error: '#f56260',
};

const useStyles = createUseStyles({
    wrapper: {
      border: ({ type }) => `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
      '& h2': {
        color: ({ type }) => colors[type],
        margin: [0, 0, 10, 0],
      }
    }
});*/

export default function Alert({ children, title, type }) {
  /*const colors = {
    success: '#6da06f',
    error: '#f56260',
  }

  const style = {
    heading: {
      color: colors[type],
      margin: '0 0 10px 0',
    },
    wrapper: {
      border: `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
    }
  }*/
  //const classes = useStyles({ type })
  return (
    <div className={`alert-wrapper ${type}`}>
      <h2>{title}</h2>
      {children}
    </div>
    /*
    <div style={style.wrapper}>
      <h2 style={style.heading}>{title}</h2>
      {children}
    </div>
    */
  )
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

//className={classes.wrapper}