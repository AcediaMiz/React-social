import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <section className="App__content">
        <Dialogs></Dialogs>
      </section>
    </div>
  );
};

export default App;
