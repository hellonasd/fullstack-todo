import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import "./style.css";
import { Task } from "../task/task";
import { actions } from "../../meneger-tasks/actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const Cheduler = () => {
  const { user } = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.posts);
  const { re } = useSelector((state) => state.posts);
  const [findEl, setFind] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.asyncGetAllTodo(user.email));
  }, [re, findEl]);

  const addNewTask = (event) => {
    const value = event.target[0].value;
    if (value) {
      dispatch(actions.asyncCreateTask({ user: user.email, value }));
      event.target[0].value = "";
    }
    event.preventDefault();
  };

  const filterTodo = todos.todo.filter((el) => {
    return el.data.message.includes(findEl);
  });

  return (
    <section className="chedule-main">
      <main className="chedule-wrapper">
        <header className="chedule-header">
          <h1 className="chedule-header-title">Планировщик задач</h1>
          <input
            type="search"
            className="input-search"
            onChange={(e) => setFind(e.target.value)}
            placeholder="Поиск"
          />
        </header>
        <section className="schedule-tasks-main">
          <form className="schedule-form" onSubmit={(e) => addNewTask(e)}>
            <input
              type="text"
              className="inputs"
              placeholder="Описание моей новой задачи"
            />
            <button className="chedule-btn-add-task">Добавить задачу</button>
          </form>

          <FlipMove delay={200} className="chedule-view-task">
            {filterTodo.map((todo) => (
              <CSSTransition
                in={re}
                key={todo._id}
                timeout={200}
                classNames="item"
              >
                <Task
                  id={todo._id}
                  key={todo._id}
                  completed={todo.data.completed}
                  favorite={todo.data.favorite}
                  message={todo.data.message}
                  actions={actions}
                  isOpen={todos.isOpen}
                  {...todo}
                />
              </CSSTransition>
            ))}
          </FlipMove>

          <div className="schedile-task"></div>
        </section>
      </main>
    </section>
  );
};
