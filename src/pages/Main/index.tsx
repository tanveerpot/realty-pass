import React, { useCallback, useState } from 'react';
import classes from './main.module.css';
import { Col, message, Row } from 'antd';
import Inputs from '../../components/Inputs';
import Outputs from '../../components/Outputs';

const Main: React.FC = () => {
  const [transactionFee, setTransactionFee] = useState<number>(0);
  const [totalDue, setTotalDue] = useState<number>(0);

  const onCalculate = useCallback(
    (purchasePrice: number, estimatedCommission: number): void => {
      if (purchasePrice === 0 || estimatedCommission === 0) {
        message.error('Enter non-zero values for both fields!');
        return;
      }
      const initialTransactionFee = 500;
      const above250k = purchasePrice - 250000;
      const remainingTransactionFee =
        (Math.floor(above250k / 250000) + 1) * 250;
      const additionalTransactionFee =
        Math.round(estimatedCommission * 0.005 * 100) / 100;
      const totalTransactionFee =
        Math.round(
          (initialTransactionFee +
            remainingTransactionFee +
            additionalTransactionFee) *
            100
        ) / 100;
      const totalDueAmount =
        Math.round((estimatedCommission - totalTransactionFee) * 100) / 100;
      setTotalDue(totalDueAmount);
      setTransactionFee(totalTransactionFee);
    },
    []
  );

  return (
    <>
      <h1 style={{ marginTop: 10, textAlign: 'center' }}>Realty Pass</h1>
      <hr />
      <Row className={classes.main_page} gutter={4}>
        <Col xs={24} sm={24} md={12}>
          <Inputs onCalculate={onCalculate} />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Outputs transactionFee={transactionFee} totalDue={totalDue} />
        </Col>
      </Row>
    </>
  );
};

export default Main;
