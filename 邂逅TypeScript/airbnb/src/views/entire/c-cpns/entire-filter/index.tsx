import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo(() => {
  const [selectedItem, setSelectedItem] = useState([]);
  function itemClickHandle(item) {
    const newItems = [...selectedItem];
    //移除操作
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => {
        return filterItem === item;
      });
      newItems.splice(itemIndex, 1);
    } else {
      //添加操作
      newItems.push(item);
    }
    setSelectedItem(newItems);
  }
  return (
    <EntireFilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              key={item}
              className={classNames("item", {
                active: selectedItem.includes(item),
              })}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
