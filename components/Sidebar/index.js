import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export const Sidebar = props => {
  return (
    <div id="App">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"App"}>
          <div>
            <Link href='/'><a className="burger_text">Главная</a></Link>
          </div>
          <div>
            <Link href='/projects'><a className="burger_text">Реализованные задачи</a></Link>
          </div>
          <div>
            <Link href='/inprogress'><a className="burger_text">Задачи в разработке</a></Link>
          </div>
          <div>
            <Link href='/contacts'><a className="burger_text">Контакты</a></Link>
          </div>
      </Menu>
    </div>
  );
};