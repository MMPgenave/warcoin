import { openLink } from "@telegram-apps/sdk-react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { Avatar, Cell, List, Navigation, Section, Title } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { DisplayData } from "@/components/DisplayData/DisplayData.tsx";
import { Page } from "@/components/Page";

import "./TONConnectPage.css";
import xxIcon from "@/mmpassets/xx-icon.png";
export const Wallet: FC = () => {
  const wallet = useTonWallet();

  if (!wallet) {
    return (
      <Page>
        <div className=" text-[34px] font-bold text-white text-center pt-10 px-4">
          The Future of Your Assets is Here!
        </div>
        <img src={xxIcon} alt="xxIcon" className=" mt-12 mx-auto" />
        <div className=" text-[16px] font-black text-white text-center mt-10 px-[80px]">
          The Jubeo airdrop is still ongoing, but get ready now!
        </div>
        <div className=" text-[12px] font-normal text-white text-center mt-1 px-[70px]">
          To ensure you receive your rewards at the end of the airdrop, connect your wallet now. Once the airdrop ends,
          the coins you’ve earned will be transferred to your wallet.{" "}
        </div>
        {/* <Placeholder
          className="ton-connect-page__placeholder"
          header="TON Connect"
          description={
            <>
              <Text>To display the data related to the TON Connect, it is required to connect your wallet</Text>
             
            </>
          }
        /> */}
        <TonConnectButton className="ton-connect-page__button mt-6  " />
        <div className=" mt-[44px] mx-auto w-[90%] h-[206px] flex items-center justify-center rounded-[16px] gradient-orib ">
          <div className="  bg-[#131212] rounded-[16px] h-[203px] w-[99%] py-[23px] px-5 overflow-y-auto scrollbar-hide ">
            <div className=" text-[16px] text-white font-bold">🎯 Respect the Rules | Fair Play</div>
            <div className="mt-2 pl-3">
              <div className=" relative ml-3 text-white font-bold text-[10px] ">
                <div className=" absolute -left-3 top-[5px] transform -translate-y-1/2  ">.</div>
                <div>Cheating</div>
              </div>
              <div className=" relative ml-3 text-white font-bold text-[10px] ">
                <div className=" absolute -left-3 top-[5px] transform -translate-y-1/2  ">.</div>
                <div>
                  {" "}
                  Using unauthorized methods to earn coins Using unauthorized methods to earn coins Using unauthorized
                  methods to earn coins o earn coins Using unauthorized methods to earn coins Using una
                </div>
              </div>
              <div className=" relative ml-3 text-white font-bold text-[10px] ">
                <div className=" absolute -left-3 top-[5px] transform -translate-y-1/2  ">.</div>
                <div> Creating fake accounts</div>
              </div>
            </div>
            <div className=" text-white font-medium text-[10px] mt-2">
              ❌ These actions will be strictly monitored and lead to the cancellation of all rewards.
            </div>
            <div className=" text-white font-medium text-[10px] mt-1 ">
              🔒 We are committed to fair and transparent play, and violations will not be tolerated to protect the
              rights of all users.{" "}
            </div>
          </div>
        </div>
      </Page>
    );
  }

  const {
    account: { chain, publicKey, address },
    device: { appName, appVersion, maxProtocolVersion, platform, features },
  } = wallet;

  return (
    <Page>
      <List>
        {"imageUrl" in wallet && (
          <>
            <Section>
              <Cell
                before={<Avatar src={wallet.imageUrl} alt="Provider logo" width={60} height={60} />}
                after={<Navigation>About wallet</Navigation>}
                subtitle={wallet.appName}
                onClick={(e) => {
                  e.preventDefault();
                  openLink(wallet.aboutUrl);
                }}
              >
                <Title level="3">{wallet.name}</Title>
              </Cell>
            </Section>
            <TonConnectButton className="ton-connect-page__button-connected" />
          </>
        )}
        <DisplayData
          header="Account"
          rows={[
            { title: "Address", value: address },
            { title: "Chain", value: chain },
            { title: "Public Key", value: publicKey },
          ]}
        />
        <DisplayData
          header="Device"
          rows={[
            { title: "App Name", value: appName },
            { title: "App Version", value: appVersion },
            { title: "Max Protocol Version", value: maxProtocolVersion },
            { title: "Platform", value: platform },
            {
              title: "Features",
              value: features
                .map((f) => (typeof f === "object" ? f.name : undefined))
                .filter((v) => v)
                .join(", "),
            },
          ]}
        />
      </List>
    </Page>
  );
};
