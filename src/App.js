import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between items-center mt-4 pb-4 border-b-4 border-black">
        <h1 className="ml-20 font-extrabold text-3xl">Arkadaş Listesi</h1>
        <div className="flex gap-4 mr-20">
          <Link
            to="/login"
            className="font-bold border border-black p-3 bg-orange-500 text-white"
          >
            LOGIN
          </Link>
          <Link
            to="/friendlist"
            className="font-bold border border-black p-3 bg-orange-500 text-white"
          >
            FRIENDSLIST
          </Link>
          <Link
            to="/addfriend"
            className="font-bold border border-black p-3 bg-orange-500 text-white"
          >
            ADDFRIEND
          </Link>
          <Logout />
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendlist" component={FriendList} />
        <PrivateRoute path="/addfriend" component={AddFriends} />
      </Switch>
    </div>
  );
}

export default App;
