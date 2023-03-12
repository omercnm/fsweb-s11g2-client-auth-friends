import { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

function FriendList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1 className="flex font-extrabold text-5xl justify-center mt-11">
        FRIENDS LIST
      </h1>
      <div className="flex w-3/4 mx-auto text-left justify-center mt-6 text-lg">
        <ul>
          {friends.map((item) => (
            <li className="p-4 font-extrabold" key={item.id}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FriendList;
