import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="mini bg-light m-auto shadow-lg p-3 mb-5 bg-white rounded fw-bold">
        <p className="heading h3">TO DO LIST ✓✓</p>
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <Todo />
          </div>
        </div>
      </div>
      <p>
      </p>
    </div>
  );
}

export default App;
