import React from 'react';
import './AsideBlock.css';

const AsideBlock: React.FC = ({ children }) => {
  return <aside className="AsideBlock">{children}</aside>;
};

export default AsideBlock;
