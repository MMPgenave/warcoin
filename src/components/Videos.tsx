import { VideosItems } from "@/constant";
import { TaskCard } from "./cards/TaskCard";
const Videos = () => {
  return (
    <div className=" mt-4  ">
      {VideosItems.map((item) => {
        const { id, title, prize, img } = item;
        return (
          <div key={id} className="  relative   ">
            <TaskCard title={title} prize={prize} img={img} />
            {id !== String(VideosItems.length) && (
              <div className=" absolute -bottom-[1px] left-[50%] transform -translate-x-1/2  w-[5rem]  h-[1px]  gradient-to-center   "></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
