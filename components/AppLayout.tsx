import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Menu = (props: {
  items: {
    title: string;
    href: string;
  }[];
}) => (
  <ul className="menu p-4 w-80 bg-base-200 text-base-content">
    {props.items.map((item, index) => (
      <li key={index}>
        <Link href={item.href}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

export default function AppLayout(props: {
  children?: React.ReactNode;
  title?: string;
  menuItems?: {
    title: string;
    href: string;
  }[];
}) {
  const {
    title = "Tiket",
    menuItems = [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Tiket yang sudah dibeli",
        href: "/purchased",
      },
      {
        title: "Search",
        href: "/search",
      },
      {
        title: "Logout",
        href: "/logout",
      },
    ],
  } = props;

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <div className="navbar bg-base-100">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <Bars3Icon className="h-6 w-6" />
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">{title}</a>
          </div>
        </div>

        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Menu items={menuItems} />
      </div>
    </div>
  );
}
