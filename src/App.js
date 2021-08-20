
import 'bootstrap/dist/css/bootstrap.min.css';
import {Feedback} from './components/feedback/feedback';
import { About } from './components/about/about';
import { Choose } from './components/choose/choose';
import { Contact } from './components/contact/contact';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
function App() {
  return (
    <div>
      <Header/>  
     <About/>
      <Choose/>
      <Feedback/>
      <Faq/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
