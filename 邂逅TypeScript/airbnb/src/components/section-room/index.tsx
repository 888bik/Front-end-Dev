import React, { memo } from "react";
import { SectionRoomWrapper } from "./style";
import RoomItem from "../room-item";
import { IRoomInfo } from "@/types/home";

interface IProps {
  roomList: IRoomInfo[];
  itemWidth: string;
}
const SectionRoom = memo((props: IProps) => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionRoomWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </SectionRoomWrapper>
  );
});

export default SectionRoom;
