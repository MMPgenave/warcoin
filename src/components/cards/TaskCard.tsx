import { useState } from "react";
import Checked from "@/mmpassets/checked.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ITaskCard {
  title: string;
  prize: string;
  img: string;
}
export const TaskCard = ({ title, prize, img }: ITaskCard) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className=" flex justify-between items-center py-4">
      <div className=" flex gap-3 items-center">
        <img src={img} alt={title} />
        <div>
          <div className=" font-semibold text-[14px] text-white ">{title}</div>
          <div className=" text-[12px] text-[#DBDBDB]/75 ">{prize}</div>
        </div>
      </div>
      <div className="  w-[64px] h-[24px] flex items-center justify-center">
        {!isDone ? (
          <Dialog>
            <DialogTrigger className=" bg-[#D9D9D9] cursor-pointer rounded-[8px] text-[#101010] font-normal text-[12px] w-[64px] h-[24px] flex items-center justify-center ">
              Start
            </DialogTrigger>
            <DialogContent className=" w-[70%] rounded-[16px] bg-[#101010] border-[0px]  ">
              <DialogHeader>
                <img src={img} alt={title} className=" mt-3 w-[64px] h-[64px] mx-auto  " />
                <DialogTitle className=" !mt-5 text-[16px] font-semibold text-white ">{title}</DialogTitle>
                <div
                  className=" !mt-4  rounded-[4px] bg-[#DFE0DE] text-[#101010] font-semibold text-[12px] w-fit mx-auto px-6 py-[6px] "
                  onClick={() => setIsDone(true)}
                >
                  Subscribe
                </div>
                <div className=" !mt-4 font-bold text-[20px] text-white  ">{prize}</div>
                <div className=" !mt-4 rounded-[4px] bg-[#DFE0DE] text-[#101010] font-semibold text-[16px] w-full mx-auto px-5 py-2 ">
                  Check
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <img src={Checked} alt="checked" />
        )}
      </div>
    </div>
  );
};
