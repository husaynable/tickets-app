import React, { useState } from 'react';
import Checkbox from './Checkbox';
import './SelectListItem.css';

const SelectListItem: React.FC<propTypes> = ({
  isSelected,
  label,
  onSelect,
  onOnly
}) => {
  // const [selected, setSelected] = useState<boolean | undefined>(isSelected);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onOnlyClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    onOnly && onOnly();
  };

  return (
    <div
      className="SelectListItem"
      onClick={() => onSelect(!isSelected)}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <span>
        <Checkbox checked={isSelected} />
        <span className="SelectListItem__label">{label}</span>
      </span>
      {isHovered && onOnly ? (
        <button className="SelectListItem__button" onClick={onOnlyClickHandler}>
          только
        </button>
      ) : null}
    </div>
  );
};

export default SelectListItem;

type propTypes = {
  isSelected: boolean;
  label: string;
  onSelect: (selected: boolean) => void;
  onOnly?: () => void;
};
