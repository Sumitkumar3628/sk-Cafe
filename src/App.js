import './App.css';
import logo from './components/logo.png';
import SlideShow from './components/SlideShow';

function App() {
  return (
      <header>
        <nav>
          <div class="row">
            <img src={logo} alt="" className="logo"></img>
            <ul className="main-nav animate__animated animate__slideInDown" id="check-class">
              <li><a href="#">cake delivery</a></li>
              <li><a href="#">how to order</a></li>
              <li><a href="#">check more</a></li>
              <li><a href="#">sign up</a></li>
            </ul>
            <a href="#" className="mobile-icon" onClick={SlideShow}><i class="fa fa-bars"></i></a>
          </div>
        </nav>
        
        <div className="main-content-header">
          <h1>WELCOME TO <span className="color-change">SK CAFE</span>.<br/>
            HOUSE OF CAKE LOVERS OO YES!
          </h1>
          <a href="#" className="btn btn-full">click to order</a>
          <a href="#" className="btn btn-nav">show me more</a>
        </div>
      </header>
    
  );
}

export default App;
