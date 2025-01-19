// import { Section, List } from "@telegram-apps/telegram-ui";
// import {  Image } from '@telegram-apps/telegram-ui';

import type { FC } from "react";
import Menu from "@/components/Menu";

import { Page } from "@/components/Page.tsx";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className=" flex justify-center items-center w-full h-full ">
        <div className=" mt-10 text-blue-300 text-xl">User Coins : 500</div>
        <Menu />
      </div>
    </Page>
  );
};
