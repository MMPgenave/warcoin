import { Link } from "@/components/Link/Link.tsx";
import { routes } from "@/navigation/routes";

const Menu = () => {
  return (
    <div className=" fixed bottom-0 flex justify-between  w-full px-[1rem] pb-1 z-10">
      {routes.map((route) => (
        <Link
          to={route.path}
          key={route.title}
          className=" flex flex-col gap-0 justify-center items-center text-[#fff] text-[1.3rem]
         "
        >
          <i className={`bi ${route.icon}  `}></i>
          <div>{route.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
