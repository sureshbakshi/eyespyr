import './App.scss';
import '../src/generic/bootstrap.scss'
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
    <div className='wrapper'>

      <Header/>
      <Banner/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
