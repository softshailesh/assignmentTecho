import { useEffect } from "react";
import "./App.css";
import Header from "./component/header";
import Portfoliototal from "./component/portfoliototal";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      console.log("data : ", response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen bg-[#212124] flex flex-col items-center">
        <Header />
        <div className="flex-1 w-full flex flex-col items-center justify-start p-4 sm:p-7 gap-4 sm:gap-12">
          <Portfoliototal />
        </div>
      </div>
    </>
  );
}

export default App;
