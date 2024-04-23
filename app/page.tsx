"use client";
import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

export default function Home() {
  const [items, setItems] = useState<string[]>(["Item 1", "item 2"]);
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = () => {
    const updatedItems = [...items];
    updatedItems.pop();
    setItems(updatedItems);
  };

  return (
    <div>
      <p>Environment: {process.env.NEXT_PUBLIC_WEBSITE_TITLE}</p>
      <Child1 onAdd={addItem} />
      <Child2 onRemove={removeItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
