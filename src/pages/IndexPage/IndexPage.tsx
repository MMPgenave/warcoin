// import { Section, List } from "@telegram-apps/telegram-ui";
// import {  Image } from '@telegram-apps/telegram-ui';

import type { FC } from "react";

import { Page } from "@/components/Page.tsx";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className=" mt-2 text-2xl font-bold border-b-2 pb-1">Muha</div>
        <div className="text-xl mt-5">User Coins : 500</div>
      </div>
    </Page>
  );
};
