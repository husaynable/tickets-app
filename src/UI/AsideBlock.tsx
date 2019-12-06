import React from 'react';
import './AsideBlock.css';

const AsideBlock: React.FC = ({ children }) => {
  return <aside className="AsideBlock card">{children}</aside>;
};

export default AsideBlock;
