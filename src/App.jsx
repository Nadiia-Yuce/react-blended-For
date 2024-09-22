import { Section, Container, Header, Text, TodoList } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todoOps';
import { selectTodos } from 'reduxTodo/todoSlice';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {todos.length === 0 ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
