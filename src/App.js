import Header from "./components/Header";
import Input from "./components/Input";
import ListContent from "./components/ListContent";

function App() {
  return (
    <div className=" bg-slate-600 h-screen flex flex-col justify-center items-center">
      <Header />
      <Input />
      <ListContent />
    </div>
  );
}

export default App;
