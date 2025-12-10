import { Outlet } from 'react-router-dom'
import TodoListView from './views/TodoListView';

export default function App() {
  return (
    <>
    <TodoListView />
    <Outlet />
    </>
  )
}
