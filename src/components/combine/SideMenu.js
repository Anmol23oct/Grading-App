import { React, useState } from 'react';
import 'antd/dist/antd.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  CalculatorOutlined,
  CommentOutlined,
  VideoCameraOutlined,
  BellOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type,onselect) {
  return {
    key,
    icon,
    children,
    label,
    type,
    onselect,
  };
}

const items = [
  getItem((<a href="/Grading_feedback">
  Navigation Four - Link
</a>), '1', <CalculatorOutlined />),
  getItem('Announcements', '/Grading_feedback', <BellOutlined />),
  getItem('Calendar', '3', <CalendarOutlined />),
  getItem('Files', '4', <FolderOpenOutlined />),
  getItem('Forum', '5', <CommentOutlined />),
  getItem('CUbits', '6', <VideoCameraOutlined />),
  getItem('Settings', '7', <SettingOutlined />),
  getItem('Help', '8', <QuestionCircleOutlined />),
];

function SideMenu() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        maxWidth: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{width: "40px"}}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuUnfoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default SideMenu