import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btns {
    display: flex;
    box-sizing: content-box;
  }

  .btn {
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    border-radius: 22px;
    cursor: pointer;
    box-sizing: content-box;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow};

    .menu {
      margin-right: 10px;
    }

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;
      .top .bottom {
        padding: 10px 20px;
      }
      .top {
        border-bottom: 1px solid #f5f5f5;
      }

      .item {
        height: 20px;
        line-height: 20px;
        margin: 10px 10px;
        padding: 10px 10px;
        cursor: pointer;
        font-weight: 600;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
