import { Link } from "@/components/Link/Link.tsx";
import { routes } from "@/navigation/routes";
import { useLocation } from "react-router-dom";
const Menu = () => {
  const location = useLocation();
  return (
    <div className=" fixed bottom-0 flex justify-between items-center max-w-[400px] w-full px-11  left-[50%] transform -translate-x-1/2  pb-3 z-10 ">
      {routes.map((route) => (
        <Link
          to={route.path}
          key={route.title}
          className=" flex flex-col gap-1 justify-center items-center text-[#fff] text-[1.3rem]
         "
        >
          {/* <i className={`bi ${route.icon}  `}></i> */}
          <img src={route.path === location.pathname ? route.imgActive : route.imgInActive} alt="" />
          <div
            className={`text-[10px] font-normal  ${
              route.path === location.pathname ? "text-[#ffffff]" : "text-[#ffffff]/30"
            }`}
          >
            {route.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
