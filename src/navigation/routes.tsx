import type { ComponentType } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { Task } from "@/pages/Task";
import { Friend } from "@/pages/Friend";
import { Trade } from "@/pages/Trade";
import { Wallet } from "@/pages/TONConnectPage/Wallet";
import homeActive from "@/mmpassets/home-active.png";
import homeInActive from "@/mmpassets/home-inactive.png";
import taskAcitve from "@/mmpassets/task-active.png";
import taskInAcitve from "@/mmpassets/task-inactive.png";
import tradeAcitve from "@/mmpassets/trade-active.png";
import tradeInAcitve from "@/mmpassets/trade-inactive.png";
import friendsAcitve from "@/mmpassets/friends-active.png";
import friendsInAcitve from "@/mmpassets/friends-inactive.png";
import walletAcitve from "@/mmpassets/wallet-active.png";
import walletInAcitve from "@/mmpassets/wallet-inactive.png";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: string;
  imgActive: string;
  imgInActive: string;
}

export const routes: Route[] = [
  {
    path: "/",
    Component: IndexPage,
    title: "Home",
    icon: "bi-house",
    imgActive: homeActive,
    imgInActive: homeInActive,
  },
  {
    path: "/task",
    Component: Task,
    title: "Task",
    icon: "bi-list-task",
    imgActive: taskAcitve,
    imgInActive: taskInAcitve,
  },
  {
    path: "/trade",
    Component: Trade,
    title: "Trade",
    icon: "bi-graph-up-arrow",
    imgActive: tradeAcitve,
    imgInActive: tradeInAcitve,
  },
  {
    path: "/friend",
    Component: Friend,
    title: "Friends",
    icon: "bi-people",
    imgActive: friendsAcitve,
    imgInActive: friendsInAcitve,
  },
  {
    path: "/ton-connect",
    Component: Wallet,
    title: "Wallet",
    icon: "bi-wallet2",
    imgActive: walletAcitve,
    imgInActive: walletInAcitve,
  },
];
