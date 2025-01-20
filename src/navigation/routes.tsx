import type { ComponentType } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { Task } from "@/pages/Task";
import { Friend } from "@/pages/Friend";
import { Trade } from "@/pages/Trade";
import { Wallet } from "@/pages/TONConnectPage/Wallet";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: string;
}

export const routes: Route[] = [
  {
    path: "/",
    Component: IndexPage,
    title: "Home",
    icon: "bi-house",
  },
  { path: "/task", Component: Task, title: "Task", icon: "bi-list-task" },
  { path: "/trade", Component: Trade, title: "Trade", icon: "bi-graph-up-arrow" },
  { path: "/friend", Component: Friend, title: "Friend", icon: "bi-people" },
  {
    path: "/ton-connect",
    Component: Wallet,
    title: "Wallet",
    icon: "bi-wallet2",
  },
];
