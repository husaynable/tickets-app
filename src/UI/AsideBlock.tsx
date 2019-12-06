import React from 'react';
import './AsideBlock.css';

const AsideBlock: React.FC<propTypes> = ({ header, children }) => {
  return <aside className="AsideBlock">{children}</aside>;
};

export default AsideBlock;

type propTypes = { header: string };
