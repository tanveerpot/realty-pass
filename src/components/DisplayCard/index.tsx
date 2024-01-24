import React from 'react';
import classes from './DisplayCard.module.css';
import { numberWithCommas } from '../../utils';

interface DisplayCardProps {
  title: string;
  amount: number;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, amount }) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <div className={classes.amount_box}>${numberWithCommas(amount)}</div>
    </div>
  );
};

export default DisplayCard;
