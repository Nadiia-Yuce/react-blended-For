import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Grid>
        {todos.map((todo, idx) => {
          return <Todo todo={todo} counter={idx} key={todo.id} />;
        })}
      </Grid>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
    </>
  );
};
