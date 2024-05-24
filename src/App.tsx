import { useEffect } from "react";
import { Strategy, Analytics, Efficiency, Ramos, Control, GetStarted, Footer } from "./components";
import Header from "./components/header";

function App() {
  
  useEffect(() => {
    window.addEventListener('load', ()=>{
      window.scrollTo(0, 0);
    })
 
  }, []);
  return (
    <div>
      <Header />
      <main className="main-c">
        <Analytics />
        <Strategy />
        <Efficiency/>
        <Ramos/>
        <Control/>
        <GetStarted/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
