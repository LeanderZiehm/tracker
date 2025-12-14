// src/routes.ts
import App from "./App";
import TodoListView from './views/TodoListView';
import AllViews from './views/AllView';
import PromptsView from './views/PromptsView';
import TrackerView from './views/TrackerView';

export const appRoutes = [
  { path: '/all', label: 'All', element: <AllViews /> },
  { path: '/todos', label: 'Todos', element: <TodoListView /> },
  { path: '/prompts', label: 'Prompts', element: <PromptsView /> },
  { path: '/tracker', label: 'Tracker', element: <TrackerView /> },
  { path: '/', label: 'Home', element: <App /> }, // optional home route
];
