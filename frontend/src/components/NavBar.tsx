import {Link } from 'react-router-dom'

// NavBar is tightly coupled to AppRoutes; path: ./src/routes.tsx

export default function NavBar() {
  return (
    <>
      <div style={{display:"flex",gap:"20px"}} >
      <Link to="/all"> All</Link>
      <Link to="/todos"> Todos</Link>
      <Link to="/prompts"> Prompts</Link>
      <Link to="/tracker"> Tracker</Link>
      </div>
    </>
  );
}
