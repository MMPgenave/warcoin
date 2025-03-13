import { useState, type FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InGame from "@/components/InGame";
import Videos from "@/components/Videos";
export const Task: FC = () => {
  const [activeTab, setActiveTab] = useState("game");
  return (
    <div className=" ">
      <div className=" mt-6 text-center text-[32px] font-bold tracking-[0px] text-primaryGreen">Task</div>
      <div className="  text-xl text-white font-medium text-center">Earn More JUBEO!</div>
      <Tabs defaultValue="game" className=" mt-[40px] w-[400px]  mx-auto flex flex-col items-center ">
        <TabsList className="    w-[75%] bg-gradient-to-r from-[#141F11] to-[#101110] rounded-[13px] flex justify-between px-6 !py-6">
          <TabsTrigger value="game" className="  gap-1  px-4 " onClick={() => setActiveTab("game")}>
            <div className=" ">In-game</div>
            <div
              className={` w-4 h-4 rounded-full ${
                activeTab === "game" ? "bg-black" : "bg-[#737373]"
              }  text-white text-[8px] font-medium flex items-center justify-center`}
            >
              7
            </div>
          </TabsTrigger>
          <TabsTrigger value="video" className="  gap-1  px-4 " onClick={() => setActiveTab("video")}>
            <div className=" ">Vidoes</div>
            <div
              className={` w-4 h-4 rounded-full ${
                activeTab === "video" ? "bg-black" : "bg-[#737373]"
              }  text-white text-[8px] font-medium flex items-center justify-center`}
            >
              1
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="game" className=" w-full px-5">
          <InGame />
        </TabsContent>
        <TabsContent value="video" className=" w-full px-5">
          <Videos />
        </TabsContent>
      </Tabs>
    </div>
  );
};
