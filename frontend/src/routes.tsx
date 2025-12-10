import { Routes, Route } from "react-router-dom";
import App from "./App";
import TodoListView from './views/TodoListView';
import AllViews from './views/AllView';
import PromptsView from './views/PromptsView';
import TrackerView from './views/TrackerView';

// NavBar is tightly coupled to AppRoutes; path: components/NavBar.tsx

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all" element={<AllViews />} />
      <Route path="/todos" element={<TodoListView />} />
      <Route path="/prompts" element={<PromptsView />} />
      <Route path="/tracker" element={<TrackerView />} />
    </Routes>
  );
}
