"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false);
  const productsCards = [
    {
      name: "Flights",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv ncEv-rtl-aware dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M178.081 41.973c-2.681 2.663-16.065 17.416-28.956 30.221c0 107.916 3.558 99.815-14.555 117.807l-14.358-60.402l-14.67-14.572c-38.873 38.606-33.015 8.711-33.015 45.669c.037 8.071-3.373 13.38-8.263 18.237L50.66 148.39l-30.751-13.513c10.094-10.017 15.609-8.207 39.488-8.207c8.127-16.666 18.173-23.81 26.033-31.62L70.79 80.509L10 66.269c17.153-17.039 6.638-13.895 118.396-13.895c12.96-12.873 26.882-27.703 29.574-30.377c7.745-7.692 28.017-14.357 31.205-11.191c3.187 3.166-3.349 23.474-11.094 31.167zm-13.674 42.469l-8.099 8.027v23.58c17.508-17.55 21.963-17.767 8.099-31.607zm-48.125-47.923c-13.678-13.652-12.642-10.828-32.152 8.57h23.625l8.527-8.57z"></path>
        </svg>
      ),
    },
    {
      name: "Stays",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M166.666 44.998v40.438h-6.078c-2.927-7.642-10.155-13.048-18.607-13.048H123.68c-8.452 0-15.68 5.406-18.607 13.048H94.927C92 77.794 84.772 72.388 76.32 72.388H58.019c-8.452 0-15.68 5.406-18.607 13.048H33.33V44.998h133.336zM180 113.749c0-10.387-7.445-18.982-17.131-20.414H37.131C27.44 94.767 20 103.362 20 113.749v41.253h13.33v-20.627h133.336v20.627H180v-41.253z"></path>
        </svg>
      ),
    },
    {
      name: "Car",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M22.613 84.516C15.647 84.516 10 78.883 10 71.935h12.613c6.966 0 12.613 5.632 12.613 12.581H22.613zm154.774-12.581c-6.966 0-12.613 5.632-12.613 12.581h12.613c6.966 0 12.613-5.633 12.613-12.581h-12.613zm-14.97 13.387c17.991 23.752 15.201 5.722 15.201 74.678h-25.226v-15.484H46.638V160H22.382c0-61.366-3.522-57.158 15.26-75.027C52.259 31.161 56.599 40 127.818 40c25.287 0 29.864 27.733 34.599 45.322zM51.402 84.63h97.104c-10.46-38.739-5.871-32.049-76.037-32.049c-14.277 0-17.559 19.369-21.067 32.049zm9.619 26.983c0-6.948-5.647-12.581-12.613-12.581H35.796c0 6.948 5.647 12.581 12.613 12.581h12.612zm60.705 11.613H78.169a4.374 4.374 0 0 0-4.132 5.791c1.318 4.014 1.759 2.919 47.794 2.919c5.718-.001 5.891-8.71-.105-8.71zm42.479-24.194h-12.574c-6.944 0-12.613 5.655-12.613 12.581h12.574c6.944 0 12.613-5.654 12.613-12.581z"></path>
        </svg>
      ),
    },
    {
      name: "Flight+Hotel",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M157.952 96.997c6.587-23.706 7.897-44.46 4.27-58.735c21.469 15.807 32.083 43.166 26.147 69.806l-30.417-11.071zm-33.65-71.949C98.32 24.07 73.444 38.069 61.141 61.761l29.201 10.628c10.043-22.067 22.168-38.629 33.96-47.341zM167.5 152.5h-64.222l24.267-66.571l22.224 8.089c7.814-28.622 6.856-50.857 1.101-61.029c-3.617-3.015-3.281-3.53-11.699-5.766c-11.068 2.509-27.356 19.292-40.644 48.145l17.85 6.497l-25.75 70.635H32.5C20.074 152.5 10 162.574 10 175h180c0-12.426-10.074-22.5-22.5-22.5z"></path>
        </svg>
      ),
    },
  ];
  const infoCards = [
    {
      name: "Explore",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M169.88 138.9h0a79.85 79.85 0 00-3.83-84c-.1-.15-.22-.29-.33-.44a79.91 79.91 0 00-131.3-.2c-.15.22-.33.43-.48.65c-1.37 2-2.63 4.07-3.82 6.2h0a79.85 79.85 0 003.83 84c.1.15.22.29.33.44a79.91 79.91 0 00131.3.2c.15-.22.33-.43.48-.65c1.37-2 2.63-4.1 3.82-6.2zM100 114.55a110.59 110.59 0 00-20.32 2a93.19 93.19 0 01-.05-33a111 111 0 0020.37 2a110.17 110.17 0 0020.37-2a96.15 96.15 0 011.45 16.45a98.18 98.18 0 01-1.5 16.52a111.13 111.13 0 00-20.32-1.97zm16.78 16.12a97.25 97.25 0 01-16.78 31a97.09 97.09 0 01-16.78-31a95.82 95.82 0 0116.78-1.58a98.8 98.8 0 0116.78 1.58zM83.17 69.32a101.72 101.72 0 0116.83-31a101.79 101.79 0 0116.83 31A95.33 95.33 0 01100 70.91a98.56 98.56 0 01-16.83-1.59zm51.35 10.6a115.45 115.45 0 0023.28-10.56a65.2 65.2 0 010 61.27a113 113 0 00-23.38-10.54a113.12 113.12 0 001.94-20.09a111.07 111.07 0 00-1.84-20.08zm15-22.59A100.53 100.53 0 01131 65.78a115.69 115.69 0 00-14.12-28.95a65.42 65.42 0 0132.64 20.5zm-66.39-20.5a115.75 115.75 0 00-14.08 28.85a98.56 98.56 0 01-18.56-8.37a65.51 65.51 0 0132.64-20.48zM65.49 79.88a107.94 107.94 0 00.07 40.17a115.19 115.19 0 00-23.36 10.59a65.2 65.2 0 010-61.27a113 113 0 0023.29 10.51zm-15 62.79a100.14 100.14 0 0118.61-8.47a112.19 112.19 0 0014 29a65.4 65.4 0 01-32.62-20.53zm66.46 20.48a112.49 112.49 0 0013.94-28.85a98.23 98.23 0 0118.63 8.39a65.45 65.45 0 01-32.58 20.46z"></path>
        </svg>
      ),
    },

    {
      name: "Direct",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M164 20H36.16a16 16 0 00-16 16v127.82a16 16 0 0016 16H164a16 16 0 0016-16V36a16 16 0 00-16-16zm-30.38 118.85h-19.87L93.08 102.7v37.15h-19V60h19v36.71L113.35 60h20.27l-21.77 39.41z"></path>
        </svg>
      ),
    },
    {
      name: "Best Time to Travel",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M99.92 20C55.76 20 20 55.84 20 100s35.76 80 79.92 80c44.24 0 80.08-35.84 80.08-80s-35.84-80-80.08-80zm21.221 106.432C94.917 110.697 92.5 110.659 92.5 105V60h15v40.754l21.359 12.814l-7.718 12.864z"></path>
        </svg>
      ),
    },
  ];
  const otherCards = [
    {
      name: "Feedback",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M163.83 30.34H36.37a16.15 16.15 0 00-16 16v95.19a16 16 0 0016.2 15.97l23.6-.2l18.62 32.36L97.61 157h66.12a16 16 0 0015.93-15.93v-94.9a15.81 15.81 0 00-15.83-15.83zM58.28 131.81l5.48-22.91l50.68-49.58l16 15.63c-59.91 58.65-43.58 47.3-72.16 56.86zm80.15-64.63c-3.58 3.49.3 5.48-18.71-13l2.68-2.59c10.66-10.39 26.6 5.24 16.03 15.59z"></path>
        </svg>
      ),
    },
    {
      name: "Trips",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M176.54 34.58c-8.61-8.83-20.13-13.99-32.29-14.53c-21.53-.97-36.06 12.06-43.92 22.17c-7.86-10.12-22.39-23.14-43.92-22.17c-12.27.54-23.68 5.7-32.29 14.53c-8.72 8.93-13.45 20.56-13.45 32.83c0 19.27 10.98 41.01 32.51 64.58c17.11 18.73 32.29 33.15 46.28 44.24c3.23 2.48 7.1 3.77 10.87 3.77s7.64-1.29 10.87-3.77c14.1-11.09 29.17-25.51 46.28-44.24c21.53-23.57 32.51-45.32 32.51-64.58c0-12.27-4.74-23.9-13.46-32.83z"></path>
        </svg>
      ),
    },
    {
      name: "Kayak for Business",
      icon: (
        <svg
          viewBox="0 0 200 200"
          width="1.25em"
          height="1.25em"
          xmlns="http://www.w3.org/2000/svg"
          className="ncEv dJtn-menu-item-icon"
          role="img"
          aria-hidden="true"
        >
          <path d="M78.182 42h43.636v14.5h14.546V41.855c0-7.924-6.451-14.355-14.407-14.355H78.044c-7.956 0-14.407 6.431-14.407 14.355V56.5h14.546V42zM20 63.75V158c0 8.004 6.516 14.5 14.545 14.5h130.909c8.029 0 14.545-6.496 14.545-14.5V63.75H20z"></path>
        </svg>
      ),
    },
    {
      name: "English",
      icon: `https://www.kayak.co.in/res/images/flags-svg/in.svg`,
    },
    {
      name: "Indian rupee",
      icon: "₹",
    },
  ];
  return (
    <div className="text-[14px] ">
      {" "}
      <button
        onClick={() => {
          setSideBar(!sideBar);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {!sideBar && (
        <div className="w-[60px] border-r-[2px] fixed inset-y-0 top-20 left-0 overflow-y-auto scrollbar scrollbar-none">
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </div>
          <Separator className="w-[48px] mx-auto"></Separator>
          {productsCards.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className=" text-center hover:bg-slate-200 m-2 rounded-md "
                >
                  <button className="p-3">
                    <div className="flex">{items.icon}</div>
                  </button>
                </div>
              </>
            );
          })}
          <Separator className="w-[48px] mx-auto"></Separator>
          {infoCards.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className=" text-center hover:bg-slate-200 m-2 rounded-md "
                >
                  <button className="p-3">
                    <div className="flex">{items.icon}</div>
                  </button>
                </div>
              </>
            );
          })}
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <div className="flex">{otherCards[0].icon}</div>
            </button>
          </div>
          <Separator className="w-[48px] mx-auto"></Separator>
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <div className="flex">{otherCards[1].icon}</div>
            </button>
          </div>
          <Separator className="w-[48px] mx-auto"></Separator>
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <div className="flex">{otherCards[2].icon}</div>
            </button>
          </div>
          <Separator className="w-[48px] mx-auto"></Separator>
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <div className="flex">{otherCards[0].icon}</div>
            </button>
          </div>
          <div className=" text-center hover:bg-slate-200 m-2 rounded-md ">
            <button className="p-3">
              <div className="flex">{otherCards[0].icon}</div>
            </button>
          </div>
        </div>
      )}
      {/* //expanded sidebar */}
      {sideBar && (
        <div className=" w-[220px]   border-r-[2px] fixed  inset-y-0 top-20 left-0 overflow-y-auto scrollbar-none">
          <div className=" hover:bg-slate-200 m-2 rounded-md  ">
            <button className="pl-3 py-3 pr-14">
              <div className="flex  gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign In
              </div>
            </button>
          </div>
          <Separator className="w-[205px] mx-1  "></Separator>
          {productsCards.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="hover:bg-slate-200 m-2 rounded-md  "
                >
                  <button className=" pl-3 py-3 pr-14">
                    <div className="flex  gap-x-8">
                      {items.icon}
                      {items.name}
                    </div>
                  </button>
                </div>
              </>
            );
          })}
          <Separator className="w-[205px] mx-1 "></Separator>
          {infoCards.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className="hover:bg-slate-200 m-2 rounded-md  "
                >
                  <button
                    className={
                      items.name === "Best Time to Travel"
                        ? "pl-3 py-3 pr-3"
                        : "pl-3 py-3 pr-14"
                    }
                  >
                    <div className="flex  gap-x-8">
                      <span className="mt-0.5"> {items.icon}</span>

                      {items.name}
                    </div>
                  </button>
                </div>
              </>
            );
          })}
          <Separator className="w-[205px] mx-1 "></Separator>
          <div className="hover:bg-slate-200 m-2 rounded-md  ">
            <button className=" pl-3 py-3 pr-14">
              <div className="flex  gap-x-8">
                {otherCards[0].icon}
                {otherCards[0].name}
              </div>
            </button>
          </div>
          <Separator className="w-[205px] mx-1 "></Separator>
          <div className="hover:bg-slate-200 m-2 rounded-md  ">
            <button className=" pl-3 py-3 pr-14">
              <div className="flex  gap-x-8">
                {otherCards[1].icon}
                {otherCards[1].name}
              </div>
            </button>
          </div>
          <Separator className="w-[205px] mx-1 "></Separator>
          {/*  kayak for business*/}
          <div className="hover:bg-slate-200 m-2 rounded-md  ">
            <button className=" pl-3 py-3 pr-1">
              <div className="flex  gap-x-8">
                {otherCards[2].icon}
                {otherCards[2].name}
              </div>
            </button>
          </div>
          <Separator className="w-[205px] mx-1 "></Separator>
          <div className="hover:bg-slate-200 m-2 rounded-md  ">
            <button className=" pl-3 py-3 pr-14">
              <div className="flex  gap-x-8">
                <Image
                  src="https://www.kayak.co.in/res/images/flags-svg/in.svg"
                  className="w-[18px] h-[18px]"
                  alt="Kayak Logo"
                ></Image>
                {/* <img src="" alt="" className="w-[18px] h-[18px]" /> */}

                {otherCards[3].name}
              </div>
            </button>
          </div>
          {/* rupee */}
          <div className="hover:bg-slate-200 m-2 rounded-md  ">
            <button className=" pl-3 py-3 pr-14">
              <div className="flex  gap-x-8">
                <span className="text-black font-semibold">
                  {otherCards[4].icon}
                </span>

                {otherCards[4].name}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
