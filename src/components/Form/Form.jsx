import { FiSearch } from 'react-icons/fi';
import { addTodo } from '../../reduxTodo/todoOps';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';

export const Form = () => {

  const dispatch = useDispatch();
  function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const newTodo = { text: form.search.value };
    dispatch(addTodo(newTodo));
    form.reset();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
