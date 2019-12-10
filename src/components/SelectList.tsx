import React, { useState, useEffect } from 'react';
import './SelectList.css';
import SelectListItem from './SelectListItem';
import { SelectItem } from '../models/select-item';

const SelectList: React.FC<propTypes> = ({
  listHeader,
  items,
  onSelectionChange
}) => {
  useEffect(() => {
    const isAllSelected = items.every(item => item.isSelected);
    setAllItemsSelected(isAllSelected);
  }, [items]);

  const [allItemsSelected, setAllItemsSelected] = useState<boolean>(false);

  const allSelectedHandler = (selected: boolean) => {
    const newItems = items.map(item => {
      return { ...item, isSelected: selected } as SelectItem;
    });
    onSelectionChange(newItems);
  };

  const itemSelectedHandler = (itemId: number) => {
    return (selected: boolean) => {
      const newItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, isSelected: selected } as SelectItem;
        }
        return item;
      });

      onSelectionChange(newItems);
    };
  };

  const itemOnlySelectHandler = (itemId: number) => {
    return () => {
      const newItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, isSelected: true } as SelectItem;
        }
        return { ...item, isSelected: false } as SelectItem;
      });
      onSelectionChange(newItems);
    };
  };

  return (
    <div className="SelectList">
      <h4 className="SelectList__header">{listHeader}</h4>
      <SelectListItem
        label="Все"
        isSelected={allItemsSelected}
        onSelect={allSelectedHandler}
      />
      {items.map(item => (
        <SelectListItem
          isSelected={item.isSelected}
          label={item.label}
          key={item.id}
          onSelect={itemSelectedHandler(item.id)}
          onOnly={itemOnlySelectHandler(item.id)}
        />
      ))}
    </div>
  );
};

export default SelectList;

type propTypes = {
  listHeader: string;
  items: SelectItem[];
  onSelectionChange: (items: SelectItem[]) => void;
};
