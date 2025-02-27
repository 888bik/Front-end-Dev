import React, { memo } from "react";
import { SectionRoomWrapper } from "./style";
import RoomItem from "../room-item";
import { IRoomInfo } from "@/store";

interface IProps {
  roomList: IRoomInfo[];
}
const SectionRoom = memo((props: IProps) => {
  const { roomList = [] } = props;
  return (
    <SectionRoomWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </SectionRoomWrapper>
  );
});

export default SectionRoom;
