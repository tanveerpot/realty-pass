import React, { useMemo } from 'react';
import { Col, Divider, Progress, Row } from 'antd';
import DisplayCard from '../DisplayCard';

interface OutputsProps {
  transactionFee: number;
  totalDue: number;
}

const Outputs: React.FC<OutputsProps> = ({ transactionFee, totalDue }) => {
  const progress = useMemo((): number => {
    const total = Math.round((transactionFee + totalDue) * 100) / 100;
    return Math.round((totalDue / total) * 100 * 100) / 100;
  }, [transactionFee, totalDue]);

  return (
    <>
      <Row
        style={{ width: '100%', marginTop: 40 }}
        justify="center"
        gutter={10}
      >
        <Col span={10}>
          <DisplayCard title="Transaction Fee" amount={transactionFee} />
        </Col>
        <Col span={10}>
          <DisplayCard title="Total Due" amount={totalDue} />
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col span={18}>
          <Progress percent={progress} />
        </Col>
      </Row>
    </>
  );
};
export default React.memo(Outputs);
