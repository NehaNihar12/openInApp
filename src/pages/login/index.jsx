import LogoWhite from "assets/icons/LogoWhite";
import SignInForm from "components/SignInForm";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="h-full md:h-screen w-screen overflow-hidden bg-bgcolor-main grid grid-rows-layout gap-4 md:gap-0 md:grid-cols-layout-md md:grid-rows-layout-md transition-all duration-100 ease-in-out">
      <header className="bg-blue-primary md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 ">
        <div className="flex items-center p-3 ps-2.5 gap-3 md:flex-col md:items-start md:h-full">
          <a href="#" className="block md:hidden">
            <LogoWhite fill="#FAFAFB" />{" "}
          </a>
          <a href="#" className="hidden md:block pl-7">
            <LogoWhite fill="#FAFAFB" width="50" height="80" />{" "}
          </a>
          <div className="text-white-ghost block md:hidden ">
            <a href="#">Base</a>
          </div>
          <div className="text-white-ghost hidden md:block text-5xl font-bold flex-auto self-center pt-64">
            <a href="#">BASE</a>
          </div>
        </div>
      </header>
      <div className="hidden md:block h-[200%] translate-x-[-5.15rem] translate-y-[-7.25rem] rotate-[7deg]  bg-blue-primary md:row-start-1 md:row-end-3 "></div>
      <main className="md:row-span-full md:col-start-3 md:col-end-4 top-7">
        <div className="flex-col justify-center">
          <div className="bg-bgcolor-main">
            <SignInForm></SignInForm>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Login;
