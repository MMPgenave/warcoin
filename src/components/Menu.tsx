import { Link } from "@/components/Link/Link.tsx";
import { routes } from "@/navigation/routes";

const Menu = () => {
  return (
    <div className=" fixed bottom-0 flex justify-between  w-full px-[1rem] pb-1 z-10">
      {routes.map((route) => (
        <Link to={route.path} key={route.title} className=" flex flex-col gap-1 justify-center items-center ">
          <div className=" text-[1.25rem]">{route.title}</div>
          <i className={`bi ${route.icon} text-[2rem] text-blue-400`}></i>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
