import React from "react";

interface AddItemProps {
  onRemove: () => void;
}

const Child2: React.FC<AddItemProps> = ({ onRemove }) => {
  return <button onClick={onRemove}>Remove Item</button>;
};

export default Child2;
