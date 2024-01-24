import { Col, Row, Button, InputNumber } from 'antd';
import React, { useState } from 'react';

interface InputsProps {
  onCalculate: (purchasePrice: number, estimatedCommission: number) => void;
}

const Inputs: React.FC<InputsProps> = ({ onCalculate }) => {
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [estimatedCommission, setEstimatedCommission] = useState<number>(0);

  const onClickCalculate = (): void => {
    onCalculate(purchasePrice, estimatedCommission);
    setEstimatedCommission(0);
    setPurchasePrice(0);
  };

  return (
    <>
      <Row style={{ width: '100%', marginTop: 70 }} justify="center">
        <Col span={18}>
          <InputNumber
            min={0}
            style={{ width: '100%' }}
            placeholder="Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e as number)}
          />
        </Col>
      </Row>
      <Row style={{ width: '100%', marginTop: 20 }} justify="center">
        <Col span={18}>
          <InputNumber
            min={0}
            style={{ width: '100%' }}
            placeholder="Estimated Commission"
            value={estimatedCommission}
            onChange={(e) => setEstimatedCommission(e as number)}
          />
        </Col>
      </Row>
      <Row style={{ width: '100%', marginTop: 20 }} justify="center">
        <Col span={18}>
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={onClickCalculate}
          >
            Calculate
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(Inputs);
