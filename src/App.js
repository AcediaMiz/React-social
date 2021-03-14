import "./App.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Groups from "./components/Groups/Groups";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs/Dialogs";

const App = (props) => {
  debugger;
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Navigation></Navigation>
        <section className="App__content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dispatch={props.dispatch}
                data={props.store.getState().dialogsPage}
              ></Dialogs>
            )}
          ></Route>
          <Route
            path="/profile"
            render={() => (
              <Profile
                dispatch={props.dispatch}
                data={props.store.getState().profilePage}
              ></Profile>
            )}
          ></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/groups" component={Groups}></Route>
          <Route path="/settings" component={Settings}></Route>
        </section>
      </div>
    </Router>
  );
};

export default App;
