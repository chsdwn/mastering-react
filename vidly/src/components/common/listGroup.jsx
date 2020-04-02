import React from "react";

const ListGroup = props => {
  const { items, currentItemId, onItemSelect } = props;

  return (
    <ul className="list-group">
      <li
        className={
          currentItemId === -1 ? "list-group-item active" : "list-group-item"
        }
        onClick={() => onItemSelect(-1)}
      >
        All Genres
      </li>
      {items.map(item => (
        <li
          key={item._id}
          className={
            currentItemId === item._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item._id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
