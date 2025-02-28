import React, { memo } from "react";
import { ItemRoomWrapper } from "./style";
import { IRoomInfo } from "@/types/home";
import Rating from "@mui/material/Rating";

interface IProps {
  itemData: IRoomInfo;
  itemWidth?: string;
}
const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <ItemRoomWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="room-img">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages?.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          name="half-rating-read"
          defaultValue={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
        />
        <span className="count">{itemData.reviews_count}</span>
        {itemData.bottom_info && (
          <span className="extra">{itemData.bottom_info?.content}</span>
        )}
      </div>
    </ItemRoomWrapper>
  );
});

export default RoomItem;
