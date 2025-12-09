import { Outlet, Link } from 'react-router-dom'
import TodoComponent from './components/MyForm';

console.log("hi app.tsx");

export default function App() {
  return (
    <>
      <nav>
        <Link to="/texts"> Texts</Link>
      </nav>
      <div className="container">
      <TodoComponent/>
         <Outlet /> 
      </div>
    </>
  )
}
