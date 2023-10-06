import "./main.css";
import { useState } from "react";
import FriendListArea from "../FriendListArea/friendList";
import AddFriendArea from "../AddFriendArea/addFriend";
import BillSplitArea from "../BillSplitArea/billSplit";

const MainArea = () => {
  const [toggleBtnStatus, setToggleBtnStatus] = useState(false);
  const [selectSplitFrndState, setSelectSplitFrndState] = useState(false);
  const [selectSplitFriend, setSelectSplitFriend] = useState({});
  const [friendsList, setFriendsList] = useState([
    {
      id: 1,
      name: "Nabeel",
      credit: 50,
      imageUrl:
        "https://img.freepik.com/premium-photo/pixar-style-3d-animation-boy-glasses-cap_899449-20919.jpg",
    },
    {
      id: 2,
      name: "Zain",
      credit: -100,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuv1987P7d7c3sg7XXTZeuSKSEi1Su0Rz3ch6ALS-uJ5Qq_N49URVCE72rlc8LtKrQTUU&usqp=CAU",
    },
    {
      id: 3,
      name: "Bilal",
      credit: 0,
      imageUrl:
        "https://img.freepik.com/premium-photo/cartoon-character-boy-suit-tie-city-generative-ai_927978-16392.jpg?w=360",
    },
    {
      id: 4,
      name: "Abdullah",
      credit: 10,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Z6v68PXhB1_XwXhBWH7NaPW63_dh50oBT7MSO3YDDikUwNoZ0PpQglJ6UgyJIPX8lyo&usqp=CAU",
    },
  ]);

  return (
    <div className="MainArea">
      <div className="leftArea">
        <FriendListArea
          friendsList={friendsList}
          setSelectSplitFrndState={setSelectSplitFrndState}
          selectSplitFriend={selectSplitFriend}
          setSelectSplitFriend={setSelectSplitFriend}
        />
        <AddFriendArea
          toggleBtnStatus={toggleBtnStatus}
          setToggleBtnStatus={setToggleBtnStatus}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
        />
        <div className="toggleButton">
          <button
            className="toggleBtn"
            onClick={() => {
              setToggleBtnStatus((prvStatus) => !prvStatus);
            }}
          >
            {toggleBtnStatus ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
      <div className="rightArea">
        <BillSplitArea
          selectSplitFriend={selectSplitFriend}
          selectSplitFrndState={selectSplitFrndState}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          setSelectSplitFrndState={setSelectSplitFrndState}
          setSelectSplitFriend={setSelectSplitFriend}
        />
      </div>
    </div>
  );
};

export default MainArea;
