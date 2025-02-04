import "./App.css";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";

function App() {
  return (
    <div className="p-5 border-2 border-green-500 rounded-lg bg-green-50/5">
      <header>Header</header>
      <div>
        <h1 className="text-xs text-green-500 font-extrabold">Hello world!</h1>
      </div>
      <Part3 />
      <Part4 />
      <div className="mt-10 wx-auto">Footer</div>
    </div>
  );
}

export default App;
