import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Services from './components/Services';

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/posts/:category" component={Posts} />
                <Route exact component={Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
