import { Outlet } from "react-router-dom";
import { Header } from "../../../widget";
import s from "./BasicLayout.module.scss";
import { SideDrawer } from "../../../widget";
import { ITopic } from "../../../interfaces";

export const mockTopic: ITopic = {
  id: "id",
  name: "Topic",
  posts: [
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
    {
      id: "id",
      title: "test",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsa possimus molestias pariatur obcaecati necessitatibus, suscipit, debitis commodi fuga perferendis ea ratione natus vero nulla illum eligendi vel labore aut.",
      topic: "id",
    },
  ],
};

const BasicLayout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <SideDrawer topics={[mockTopic, mockTopic, mockTopic]} />
        <div className={s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
