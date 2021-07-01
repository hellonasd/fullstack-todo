import react, { useEffect, useRef, useState } from "react";
import { Star } from "../../theme/star/star";
import { Remove } from "../../theme/delete/delete";
import { Edit } from "../../theme/edit/edit";
import "./style.css";
import { useDispatch } from "react-redux";
import { actions } from "../../meneger-tasks/actions";

export const Task = (props) => {
  const { id, completed, favorite, message, isOpen } = props;
  const ref = useRef(null);
  const styles = useRef(null);

  const [animation, setAnimation] = useState("");

  useEffect(() => {
    ref.current.focus();
  });
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(actions.asyncDelteTodo(id));
  };

  const updateTask = (id, message) => {
    dispatch(actions.asyncUpdateTask({ id, message }));
  };

  const sendTask = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" || e.key === "Escape") {
      dispatch(actions.updateMessages({ id, message }));
      ref.current.blur();
      dispatch(actions.closeRedactor(id));
    }
  };
  const openEdit = (id) => {
    if (!isOpen) {
      dispatch(actions.asyncOpenRedactor(id));
    } else {
      dispatch(actions.closeRedactor(id));
    }
  };

  const updateFavorite = (id, favorite) => {
    dispatch(actions.asyncUpdateFavorite({ id, favorite }));
    dispatch(actions.asyncStartAnimation());
  };

  return (
    <li className={`task`} key={id}>
      <div className="task-message">
        <input
          disabled={!isOpen}
          ref={ref}
          className="task-input-message"
          onChange={(e) => updateTask(id, e.target.value)}
          onKeyDown={(e) => sendTask(e)}
          type="text"
          value={message}
        />
      </div>

      <div className="icons">
        <Star
          checked={!favorite}
          color1="#3B8EF3"
          color2="#000"
          updateFavorite={updateFavorite}
          id={id}
        />
        <Edit
          color1="#3B8EF3"
          color2="#000"
          openEdit={openEdit}
          id={id}
          isOpen={isOpen}
        />
        <Remove deleteTodo={deleteTodo} />
      </div>
    </li>
  );
};
