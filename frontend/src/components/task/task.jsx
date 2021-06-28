import react from "react";
import { Star } from "../../theme/star/star";
import { Remove } from "../../theme/delete/delete";
import { Edit } from "../../theme/edit/edit";
import "./style.css";
import { useDispatch } from "react-redux";
import { actions } from "../../meneger-tasks/actions";

export const Task = (props) => {
  const { id, completed, favorite, message, isOpen } = props;
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(actions.asyncDelteTodo(id));
  };

  const updateTask = (id,message) => {
    dispatch(actions.asyncUpdateTask({id,message}))
  };

  const sendTask = (e) => {
    
    const {value} = e.target;
    if(e.key === 'Enter' || e.key === 'Escape'){
      dispatch(actions.updateMessages({id,message}))
    }
  }
  const openEdit = (id) => {
    if(!isOpen){
      dispatch(actions.asyncOpenRedactor(id))
    }else {
      dispatch(actions.closeRedactor(id));
    }
  }

  return (
    <li className="task" key={id}>
      <div className="task-message">
        <input
        disabled={!isOpen}
          className="task-input-message"
          onChange={(e) =>  updateTask(id, e.target.value)}
          onKeyDown={(e) => sendTask(e)}
          type="text"
          value={message}
        />
      </div>
      <div className="icons">
        <Star />
        <Edit openEdit={openEdit} id={id}/>
        <Remove deleteTodo={deleteTodo} />
      </div>
    </li>
  );
};
