import React, { useState, useEffect } from 'react';
import SelectListItem from './SelectListItem';
import { SelectItem } from '../models/select-item';

const SelectList: React.FC<propTypes> = ({ items, onSelectionChange }) => {
  useEffect(() => {
    const isAllSelected = items.every(item => item.isSelected);
    setAllItemsSelected(isAllSelected);
  }, [items]);

  const [allItemsSelected, setAllItemsSelected] = useState<boolean>(false);

  const allSelectedHandler = (selected: boolean) => {
    const newItems = items.map(item => {
      return { ...item, isSelected: selected } as SelectItem;
    });
    console.log(newItems);
    onSelectionChange(newItems);
  };

  const itemSelectedHandler = (itemId: number) => {
    return (selected: boolean) => {
      console.log('heh');
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
      console.log(newItems);
      onSelectionChange(newItems);
    };
  };

  return (
    <div className="SelectList">
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
  items: SelectItem[];
  onSelectionChange: (items: SelectItem[]) => void;
};
