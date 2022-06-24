import './App.css';
import Footer from './components/Footer';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (

    <div>
      <div className="todo-app">
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
