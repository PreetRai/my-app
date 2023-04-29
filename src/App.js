import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import GoogleNews from './Components/news/news';
import BlogListParser from './Components/Blogs/parser';
import Blogdetails from './Components/Blogs/Post';
function App() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <BlogListParser/>
                    </Route>
                    <Route path="/post/:id">
                        <Blogdetails/>
                    </Route>
                    <Route path="/news">
                        <GoogleNews/>
                    </Route>
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
