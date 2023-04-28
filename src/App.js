import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Blogs from './Components/Blogs/Blogs';
import Post from './Components/Blogs/Post';
import GoogleNews from './Components/news/news';
import TwitterFeed from './Components/tweeter/tweeter';
function App() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Blogs/>
                    </Route>
                    <Route path="/post">
                        <Post/>
                    </Route>
                    <Route path="/news">
                        <GoogleNews/>
                    </Route>
                    <Route path="/tweets">
                        <TwitterFeed/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
