import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Navigation></Navigation>
        <section className="App__content">
          <Route path="/dialogs" component={Dialogs}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/music" component={Music}></Route>
          <Route path="/settings" component={Settings}></Route>
        </section>
      </div>
    </Router>
  );
};

export default App;
