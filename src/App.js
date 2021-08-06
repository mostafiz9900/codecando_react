/* import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import Services from './components/Services';

function App() {
    return (
        <BrowserRouter>
//             <Header />
//             {/* <NavBar /> */
// }

//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/services" component={Services} />
//                 <Route exact path="/posts/:category" component={Posts} />
//                 <Route exact component={Error} />
//             </Switch>
//             <Footer />
//         </BrowserRouter>
//     );
// }

// export default App; */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/Error';
import Footer from './pages/Footer';
import Services from './pages/services';
import SignUp from './pages/signup';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/sign-up" component={SignUp} />
                <Route exact component={Error} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
