import React from "react";
import Menu from "./Menu";
import Notification from "assets/icons/Notification";
import Setting from "assets/icons/Setting";
import Ticket from "assets/icons/Ticket";
import Category from "assets/icons/Category";
import Calendar from "assets/icons/Calendar";
import ChartIcon from "assets/icons/ChartIcon";
import Document from "assets/icons/Document";

export default function MenuList() {
  return (
    <ul class="space-y-2 font-medium">
      <Menu label="Dashboard" icon={<Category />} />
      <Menu label="Upload" icon={<ChartIcon/>}/>
      <Menu label="Invoice" icon={<Ticket/>} />
      <Menu label="Schedule" icon={<Document/>}/>
      <Menu label="Calendar" icon={<Calendar/>}/>
      <Menu label="Notification" icon={<Notification/>}/>
      <Menu label="Setting" icon={<Setting/>}/>
    </ul>
  );
}
