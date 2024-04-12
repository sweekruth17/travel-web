"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import PassangerCount from "../_components/PassangerCount";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

const page = () => {
  const [formData, setFormData] = useState({});
  const [travelerData, setTravelerData] = useState({
    adults: 0,
    students: 0,
    youths: 0,
    children: 0,
    toddlers: 0,
    infant: 0,
    total: 0,
  });
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 5),
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Form Data:", formData);

    console.log("date", date);
  };

  const caruoselData = [
    {
      name: "New Delhi, DL",
      image:
        "https://www.kayak.co.in/explore/BLR-DEL/20240511,20240515?stops=0",
      price: 12910,
    },
    {
      name: "Dubai",
      image:
        "https://www.kayak.co.in/explore/BLR-DXB/20240502,20240508?stops=0",
      price: 28235,
    },
    {
      name: "Mumbai, MH",
      image:
        "https://www.kayak.co.in/explore/BLR-BOM/20240502,20240506?stops=0",
      price: 7080,
    },
    {
      name: "Hydrabad, TG",
      image:
        "https://www.kayak.co.in/explore/BLR-HYD/20240505,20240510?stops=0",
      price: 6085,
    },
    {
      name: "Chenni, TN",
      image:
        "https://www.kayak.co.in/explore/BLR-MAA/20240502,20240506?stops=0",
      price: 3501,
    },
    {
      name: "Kochi, KL",
      image:
        "https://www.kayak.co.in/explore/BLR-COK/20240509,20240512?stops=0",
      price: 4918,
    },
    {
      name: "Kozhikode, KL",
      image:
        "https://www.kayak.co.in/explore/BLR-DEL/20240511,20240515?stops=0",
      price: 5835,
    },
    {
      name: "Vasco da Gama, GA",
      image:
        "https://www.kayak.co.in/explore/BLR-GOI/20240509,20240516?stops=0",
      price: 4168,
    },
  ];
  const imageUrl =
    "https://i.pinimg.com/736x/c8/7d/5c/c87d5c06b2eca33d662f289d61b7f01d.jpg";
  return (
    <div className="ml-[250px] py-8 mt-16">
      <div className="text-3xl font-semibold pb-8">
        Where do you want to go?
      </div>
      <div className="flex">
        {" "}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex gap-x-6">
            {" "}
            <Select>
              <SelectTrigger className="w-[180px] border-none">
                <SelectValue placeholder="Select a trip type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="One-way">One-way</SelectItem>
                  <SelectItem value="Return">Return</SelectItem>
                  <SelectItem value="Multi-city">Multi-city</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger>
                <div className="flex gap-x-4 px-2 py-1 ">
                  <span> {travelerData["total"]}</span> <span>travelers</span>
                  <span className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[320px] h-auto ">
                <div className=" gap-y-6">
                  <div className="flex ml-10 ">
                    <span className="mt-2 min-w-24">Adults18+</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="adults"
                    ></PassangerCount>{" "}
                  </div>
                  <div className="flex ml-10 ">
                    <span className="mt-2 min-w-24">Students</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="students"
                    ></PassangerCount>{" "}
                  </div>
                  <div className="flex ml-10 ">
                    <span className="mt-2 min-w-24">Youths</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="youths"
                    ></PassangerCount>{" "}
                  </div>
                  <div className="flex ml-10 ">
                    <span className="mt-2 min-w-24">Children</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="children"
                    ></PassangerCount>{" "}
                  </div>
                  <div className="flex ml-10 ">
                    <span className="  mt-2 min-w-24">Toddlers</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="toddlers"
                    ></PassangerCount>{" "}
                  </div>
                  <div className="flex ml-10 ">
                    <span className=" mt-2 min-w-24">Infants</span>
                    <PassangerCount
                      travelData={travelerData}
                      setTravelData={setTravelerData}
                      type="infant"
                    ></PassangerCount>{" "}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Select>
              <SelectTrigger className="w-[180px] border-none">
                <SelectValue placeholder="Select seating type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Premium Economy">
                    Premium Economy
                  </SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="First">First</SelectItem>
                  <SelectItem value="Mixed">Mixed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-x-4 mt-4  max-w-[1200px] items-stretch">
            {" "}
            <Input
              type="text"
              placeholder="From?"
              className=""
              onChange={() => {}}
            />
            <button className="px-3 border-[1px] rounded-lg max-h-10">
              <span className="my-auto">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <Input type="text" placeholder="To?" className="" />
            <Popover>
              <PopoverTrigger asChild>
                {/* <div className="border-[1px] w-[300px] h-10 flex rounded-lg">
                  <span className="my-auto px-2">{"Sat 29/6"}</span>
                </div> */}
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} |{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            <button
              type="submit"
              className="bg-[#fe680f] px-3 rounded-lg max-h-10"
            >
              <span>
                <svg
                  viewBox="0 0 200 200"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c8LPF-icon"
                  role="img"
                >
                  <path d="M174.973 150.594l-29.406-29.406c5.794-9.945 9.171-21.482 9.171-33.819C154.737 50.164 124.573 20 87.368 20S20 50.164 20 87.368s30.164 67.368 67.368 67.368c12.345 0 23.874-3.377 33.827-9.171l29.406 29.406c6.703 6.703 17.667 6.703 24.371 0c6.704-6.702 6.704-17.674.001-24.377zM36.842 87.36c0-27.857 22.669-50.526 50.526-50.526s50.526 22.669 50.526 50.526s-22.669 50.526-50.526 50.526s-50.526-22.669-50.526-50.526z"></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="my-10 max-w-[1200px]">
        <div className="columns-2 ">
          <div>
            <div className="text-2xl font-semibold">Hop on, hop off</div>
            <div>Skip the layovers and fly nonstop to these destinations</div>
          </div>

          <div className="grid justify-items-end pt-1 ">
            {" "}
            <Button
              variant="outline"
              className=" mt-2  border-[2px] border-black"
            >
              See more
            </Button>
          </div>
        </div>
        <div>
          <Carousel className=" ml-6 mt-6">
            <CarouselContent className="">
              {caruoselData.map((item, index) => {
                return (
                  <>
                    <CarouselItem key={index} className="basis-1/4">
                      <div className="p-1">
                        <CardContent className=" items-center justify-center ">
                          <div className="w-[250px] h-full relative ">
                            <img
                              className=" object-conatin  rounded-lg w-[250px] h-[370px] "
                              src={imageUrl}
                              alt="/travel.jpg"
                            />
                            {/* <span className=""> */}
                            <button
                              type="button"
                              className="absolute top-0 right-0 bg-white z-20 mr-2 mt-2 p-1 rounded-lg cursor-pointer"
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 m-0 "
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                            </button>
                            {/* </span> */}
                            <span className="absolute bottom-[45px] bg-white z-20 text-[11px] left-0 ml-2 mb-2 p-1 rounded-md">
                              Direct
                            </span>
                            <div className="z-20 font-semibold text-md">
                              {item.name}
                            </div>
                            <div className="text-sm">from ₹ {item.price}</div>
                          </div>
                        </CardContent>
                      </div>
                    </CarouselItem>
                  </>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-[#fe680f] text-white " />
            <CarouselNext className="bg-[#fe680f] text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default page;
