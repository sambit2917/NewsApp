import React from "react";
import NavBar from "./components/navBar/NavBar";
import NewsPage from "./components/pages/NewsPage";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
     <NavBar className="sticky top-0 z-20"/>
     <Category className="py-10 sticky top-14 z-10 bg-base-100"/>
     <NewsPage className="py-10"/>
     <Footer/>
    </>
  );
}

export default App;
