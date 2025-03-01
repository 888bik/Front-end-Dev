import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";

const EntireRooms = memo(() => {
  const { roomListData, totalCount } = useSelector(
    (state: RootState) => ({
      roomListData: state.entire.RoomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );
  // const navigate = useNavigate();
  // function itemClickHandle() {
  //   navigate("/detail");
  // }
  return (
    <EntireRoomsWrapper>
      <div className="title">共{totalCount}多处住宿</div>
      <div className="list">
        {roomListData.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item.id}
              // itemClick={itemClickHandle}
            />
          );
        })}
      </div>
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
