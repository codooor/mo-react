import "./App.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TodoExample from "./pages/TodoExample";
import PageContent from "./components/PageContent";

function App() {
  return (
    <>
      <PageContent>
        <Home />
        <Todo />
        <TodoExample />
      </PageContent>
    </>
  );
}

export default App;
