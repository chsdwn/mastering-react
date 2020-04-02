import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    currentItemId,
    onItemSelect
  } = props;

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
          key={item[valueProperty]}
          className={
            currentItemId === item[valueProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item[valueProperty])}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
