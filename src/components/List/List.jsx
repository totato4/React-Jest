import React from "react";

const List = (props) => {
  const { items = {} } = props;
  console.log(props.items);

  if (!items.length) return null;

  return (
    <ul>
      {items.map((el) => (
        <li className="list-item" key={el}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default List;
