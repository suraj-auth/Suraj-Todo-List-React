import Nav from "./components/Nav";
import Home from "./components/Home";
function App() {
  return (
    <div className="border-2 border-black w-full h-full sm:w-2/6 sm:h-full m-auto bg-green-200 px-2 dark:bg-slate-800">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
