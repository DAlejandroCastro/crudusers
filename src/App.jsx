import { useEffect, useState } from "react";
import useCrud from "./Hooks/useCrud";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [update, setUpdate] = useState(undefined);
  const [isShow, setIsShow] = useState(false);

  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud();

  useEffect(() => {
    getUsers("/users");
  }, []);
  console.log(users);
  const handleForm = () => {
    setIsShow(true);
  };

  return (
    <div className="app">
      <h1>Crud users</h1>
      <button onClick={handleForm} className="app_btn">
        <div className="sign">+</div>

        <div className="text">Create</div>
      </button>
      <UserForm
        createUser={createUser}
        update={update}
        updateUser={updateUser}
        setUpdate={setUpdate}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className="app_container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdate={setUpdate}
            setIsShow = {setIsShow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
