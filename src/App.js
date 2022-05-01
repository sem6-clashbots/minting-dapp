import './App.scss';
import Header from './scripts/Header'
import Main from './scripts/Main'
import Ploops from './scripts/Ploops'
import Footer from './scripts/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Main></Main>
        <Ploops pos={60}></Ploops>
        {/* <Ploops pos={60}></Ploops> */}
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
