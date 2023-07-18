import React from 'react';
import { Watermark } from '@pansy/react-watermark';
import Content from '../content';

function Demo0202() {
  const options = {
    text: ['示例水印', '17766666666'],
    width: 120,
    height: 64,
    gapX: 150,
    gapY: 150,
  }
  return (
    <Watermark {...options}>
      <Content />
    </Watermark>
  );

}
export default Demo0202;
