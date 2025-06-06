import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

      {/*This is called a fragment. Because the return function can only return one thing,
        we make all of our compontents children of the fragment */}

function App() {
    return(
      <>
        <Header/>
        <Food/>
        <Food/>
        <Footer/>
      </>

    );
}

export default App
