import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const VideoInLife = () => {
  return (
    <Card
      style={{
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: 300,
        margin:"20px"
      }}
      cover={
        <img
          alt="example"
          src="data:image/jpeg;base64,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"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <div>
        <h4>Julian Jameson</h4>
        <p>Profession</p>
        <div style={{ display: "flex", justifyContent: "space-evenly"}}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </Card>
  );
};

export default VideoInLife;
