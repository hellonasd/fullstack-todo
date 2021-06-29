import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Task } from "../task/task";
import { actions } from "../../meneger-tasks/actions";

export const Cheduler = () => {
  const { user } = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.asyncGetAllTodo(user.email));
  }, []);

  const addNewTask = (event) => {
    const value = event.target[0].value;
    if (value) {
      dispatch(actions.asyncCreateTask({ user: user.email, value }));
      event.target[0].value = "";
    }
    event.preventDefault();
  };

  const tasks = todos.todo.map((todo) => {
    return (
      <Task
        id={todo._id}
        key={todo._id}
        completed={todo.data.completed}
        favorite={todo.data.favorite}
        message={todo.data.message}
        actions = {actions}
        isOpen = {todos.isOpen}
        {...todo}
      />
    );
  });
  return (
    <section className="chedule-main">
      <main className="chedule-wrapper">
        <header className="chedule-header">
          <h1 className="chedule-header-title">Планировщик задач</h1>
          <input type="search" placeholder="Поиск" />
        </header>
        <section className="schedule-tasks-main">
          <form className="schedule-form" onSubmit={(e) => addNewTask(e)}>
            <input type="text" placeholder="Описание моей новой задачи" />
            <button className="chedule-btn-add-task">Добавить задачу</button>
          </form>
          <div className="chedule-view-task">
            <ul className='chedule-view-task-item'>{tasks}</ul>
          </div>
          <div className="schedile-task"></div>
        </section>
      </main>
    </section>
  );
};
