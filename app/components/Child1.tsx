import React from "react";

interface AddItemProps {
  onAdd: () => void;
}

const Child1: React.FC<AddItemProps> = ({ onAdd }) => {
  return <button onClick={onAdd}>Add Item</button>;
};

export default Child1;
