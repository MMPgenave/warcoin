import type { FC } from "react";
import friendImage from "@/mmpassets/jbo.png";
const friends = [
  { id: "1", name: "Hessam M", coin: "+10K" },
  { id: "2", name: "Mohhammad M", coin: "+20K" },
  { id: "3", name: "Hessam M", coin: "+30K" },
  { id: "4", name: "Alireza 12M", coin: "+10K" },
  { id: "5", name: "Hessam M", coin: "+30K" },
  { id: "6", name: "Hessam M", coin: "+30K" },
  { id: "7", name: "Hessam M", coin: "+30K" },
  { id: "8", name: "Hessam M", coin: "+30K" },
];
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import copyIcon from "@/mmpassets/copyIcon.png";
import shareIcon from "@/mmpassets/shareIcon.png";
import { Page } from "@/components/Page";
export const Friend: FC = () => {
  return (
    <Page>
      <div className=" pt-[64px] w-[238px] mx-auto text-center text-white text-2xl font-bold">
        Invite Friends and Get More Jubeo!
      </div>

      <div className="mt-[64px] w-[85%] mx-auto gradient-to-center rounded-t-[50px] border border-transparent border-b-0">
        <div
          className=" mt-1 rounded-t-[50px] px-8 py-6 flex
       flex-col gap-2 text-white text-[14px] bg-black"
        >
          <div className=" flex justify-between items-center  ">
            <div className=" font-medium">Friend</div>
            <div className=" font-bold">+10K jubeo</div>
          </div>
          <div className=" flex justify-between items-center  ">
            <div className=" font-medium">Friend with Permium</div>
            <div className=" font-bold">+20K jubeo</div>
          </div>
        </div>
      </div>
      <div className="mt-[55px] mx-auto w-fit ">
        <Sheet>
          <SheetTrigger>
            <div
              className=" mx-auto w-[220px] h-[50px] flex justify-center items-center
       text-black text-[16px] font-bold rounded bg-gradient-to-r from-[#4ACC1C] to-[#90F26D]  "
            >
              Invite Friends
            </div>
          </SheetTrigger>
          <SheetContent side={"bottom"} className=" bg-black rounded-t-2xl border-t-[0.5px] border-t-slate-500 ">
            <SheetHeader>
              <SheetTitle className=" text-[24px] font-bold text-white">Invite Friend</SheetTitle>
              <SheetDescription className=" !mt-5 flex flex-col gap-5 pb-4">
                <div className=" border-2 rounded border-primaryGreen flex items-center justify-center py-3">
                  <div className=" flex gap-2 items-center ">
                    <img src={shareIcon} alt="share Icon" />

                    <div className=" text-[16px] font-medium text-white ">Share Link</div>
                  </div>
                </div>
                <div className=" border-2 rounded border-primaryGreen flex items-center justify-center py-3">
                  <div className=" flex gap-2 items-center ">
                    <img src={copyIcon} alt="copy Icon" />
                    <div className=" text-[16px] font-medium text-white ">Copy Link</div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className=" mt-[54px] mx-auto w-[92%] h-[206px] flex items-center justify-center   rounded-[40px] gradient-orib">
        <div className="    rounded-[40px] h-[200px]  w-[99%] py-[30px] bg-black text-white ">
          <div className=" flex items-center justify-between pl-[46px] pr-[21px] ">
            <div className=" flex items-center">
              <div className=" Icon userIcon font-bold   text-[16px]">My Friends List</div>
              <div className=" text-primaryGreen ml-1 font-semibold text-[14px]">{`(${friends.length})`}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.7462 3.076C13.2368 1.204 10.8859 4.77835e-07 8.24643 5.93212e-07C3.6912 7.92327e-07 0.00619358 3.57 7.41026e-06 7.988C-0.00617876 12.412 3.68708 16 8.24643 16C10.8282 16 13.1316 14.85 14.6431 13.048C14.7009 12.978 14.6885 12.876 14.6163 12.82L13.5749 12.032C13.5048 11.978 13.4038 11.99 13.3461 12.056C13.21 12.218 13.0635 12.374 12.9089 12.524C12.308 13.1088 11.5958 13.5747 10.8117 13.896C10.0013 14.232 9.13726 14.4 8.24643 14.4C7.35559 14.4 6.49156 14.232 5.67909 13.898C4.89342 13.576 4.18817 13.114 3.58191 12.526C2.97565 11.938 2.4993 11.254 2.1673 10.492C1.82292 9.702 1.6497 8.864 1.6497 8C1.6497 7.136 1.82292 6.298 2.1673 5.51C2.4993 4.748 2.97565 4.064 3.58191 3.476C4.18817 2.888 4.89342 2.426 5.67909 2.104C6.49156 1.77 7.35559 1.602 8.24643 1.602C9.13726 1.602 10.0013 1.77 10.8138 2.104C11.5979 2.42527 12.3101 2.89124 12.9109 3.476C13.1027 3.662 13.2821 3.858 13.4471 4.062L12.3727 4.876C12.3482 4.89443 12.3295 4.91921 12.3188 4.94748C12.3081 4.97576 12.3058 5.00639 12.3123 5.03585C12.3188 5.06531 12.3337 5.0924 12.3553 5.11401C12.3769 5.13562 12.4044 5.15087 12.4346 5.158L15.7794 5.95C15.8825 5.974 15.9835 5.898 15.9835 5.796L16 2.456C16 2.322 15.8412 2.246 15.734 2.33L14.7462 3.076Z"
                fill="white"
              />
            </svg>
          </div>
          <div className=" mt-[20px] h-[100px] overflow-y-auto scrollbar-hide flex flex-col gap-[10px] pl-[26px] pr-[21px]">
            {friends.map((friend) => {
              const { id, name, coin } = friend;
              return (
                <div key={id} className=" relative flex justify-between items-center pb-[7px]  ">
                  <div className=" absolute w-1/2 -bottom-[2px] left-[50%] transform -translate-x-1/2 h-[1px]  gradient-to-center  "></div>

                  <div className=" flex gap-1 items-center">
                    <img src={friendImage} alt="friend" />
                    <div className=" text-[14px] font-light ">{name}</div>
                  </div>
                  <div className=" text-white text-[16px] font-medium">{coin}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
};
