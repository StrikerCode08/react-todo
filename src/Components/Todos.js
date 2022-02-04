import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markCom }) => {
  return (
    <div>
      <ListGroup className="mt-5 mb-2 items">
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span
              className="float"
              onClick={() => {
                markCom(todo.id);
              }}
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Todos;
