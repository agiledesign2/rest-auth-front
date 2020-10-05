import React from 'react';
import Alert from '../Components/Alert/Alert';
import './CartSuccess.css';

export default function CartSuccess() {
  /*const styles = {
    header: {
      width: '100%'
    },
    item: {
      marginRight: 20
    },
    wrapper: {
      borderTop: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }*/

  return(
    <Alert title="Added to Cart" type="success">
      <div className="cart-success-wrapper">
          <h2>
            You have added 3 items:
          </h2>
          <div className="item">
            <div>Bananas</div>
            <div>Quantity: 2</div>
          </div>
          <div className="item">
            <div>Lettuce</div>
            <div>Quantity: 1</div>
          </div>
      </div>
    </Alert>
  )
}

/*
      <div style={styles.wrapper}>
          <h2 style={styles.header}>
            You have added 3 items:
          </h2>
          <div style={styles.item}>
            <div>Bananas</div>
            <div>Quantity: 2</div>
          </div>
          <div style={styles.item}>
            <div>Lettuce</div>
            <div>Quantity: 1</div>
          </div>
      </div>
      */