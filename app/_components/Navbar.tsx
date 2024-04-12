"use client";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full border-b-[2px] fixed justify-between top-0 z-50 bg-white h-[80px] pt-2">
        <div className="flex py-5 gap-x-4 px-4">
          {" "}
          <Sidebar></Sidebar>
          <p className="w-[125px] h-[24px]">
            {" "}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 125 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M0 24h23.936V0H0v24zm25.266 0h23.936V0H25.266v24zm49.202 0H50.532V0h23.936v24zm1.33 0h23.936V0H75.798v24zM125 24h-23.936V0H125v24z"
                fill="#FF690F"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.287 11.549V6H7.38v12h2.907v-5.548L13.348 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549zm24.785 4.724L34.552 18h-3.104l3.947-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zM63.98 18h-2.906v-5.29L57.144 6h3.463l1.938 3.688L64.447 6h3.409l-3.876 6.71V18zm21.624-1.727L85.084 18h-3.105l3.948-12h3.696l3.93 12h-3.194l-.52-1.727h-4.235zm2.117-6.837l-1.4 4.48h2.8l-1.4-4.48zm23.63 2.113V6h-2.907v12h2.907v-5.548L114.412 18h3.208l-3.33-6 3.33-6h-3.208l-3.061 5.549z"
                fill="#FAFAFC"
              ></path>{" "}
            </svg>
          </p>
        </div>
        <div className="flex p-3 gap-x-4 px-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mt-2 mr-2"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <Button
            onClick={() => {
              return 0;
            }}
            variant="outline"
            className="gap-x-2 border-[2px] border-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 bg-black text-white rounded-full"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
