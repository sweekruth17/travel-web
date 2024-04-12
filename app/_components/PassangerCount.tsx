import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction } from "react";

const PassangerCount = ({
  travelData,
  setTravelData,
  type,
}: {
  travelData: {
    adults: number;
    students: number;
    youths: number;
    children: number;
    toddlers: number;
    infant: number;
    total: number;
  };
  setTravelData: Dispatch<
    SetStateAction<{
      adults: number;
      students: number;
      youths: number;
      children: number;
      toddlers: number;
      infant: number;
      total: number;
    }>
  >;
  type:
    | "adults"
    | "students"
    | "youths"
    | "children"
    | "toddlers"
    | "infant"
    | "total";
}) => {
  //   console.log(travelData);
  const increment = () => {
    setTravelData(
      (prev: {
        adults: number;
        students: number;
        youths: number;
        children: number;
        toddlers: number;
        infant: number;
        total: number;
      }): any => {
        let result = {};
        for (const [key, value] of Object.entries(prev)) {
          if (key === type) {
            result = { ...prev, [key]: value + 1 };
          }
          if (key === "total") {
            result = { ...result, [key]: value + 1 };
          }
        }
        return result;
      }
    );
  };
  const decrement = () => {
    setTravelData(
      (prev: {
        adults: number;
        students: number;
        youths: number;
        children: number;
        toddlers: number;
        infant: number;
        total: number;
      }): any => {
        let result = {};
        for (const [key, value] of Object.entries(prev)) {
          if (key === type) {
            if (value <= 0) {
              result = { ...prev };
              break;
            }
            result = { ...prev, [key]: value - 1 };
          }
          if (key === "total") {
            result = { ...result, [key]: value - 1 };
          }
        }
        return result;
      }
    );
  };
  return (
    <div className=" flex p-1 gap-x-4">
      <button
        onClick={decrement}
        className="border-[1px] px-2  text-blue-500 font-semibold text-xl"
      >
        -
      </button>
      <span className="mt-0.5">{travelData[type]}</span>

      <button
        onClick={increment}
        className="border-[1px] px-2  text-blue-500 font-semibold text-xl"
      >
        +
      </button>
    </div>
  );
};

export default PassangerCount;
