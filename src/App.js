import { useSelector } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
import ListContent from "./components/ListContent";


function App() {
  const {todos,todoFilter}=useSelector(state=>state.todo)
  console.log(todos,todoFilter);
  return (
    <div className=" bg-gray-600 h-screen flex flex-col justify-center items-center">
      <Header />
      <Input />
      <ListContent />
    </div>
  );
}

export default App;
