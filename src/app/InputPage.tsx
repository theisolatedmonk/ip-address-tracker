"use client";
import Image from "next/image";
import React from "react";
import arrowIcon from "@/images/icon-arrow.svg";
type Props = {};

export function InputPage({}: Props) {
  return (
    <div className="top-0 w-full min-h-screen  bg-opacity-30 flex justify-center  fixed inset-0">
      {" "}
      <div className="flex flex-col   items-center gap-4 w-full    h-full mt-24  ">
        <p>IP Address Tracker</p>
        <div className="bg-whit rounded-lg  flex items-center h-10  justify-center w-[40%]">
          <input
            className="text-black h-full  outline-none rounded-l-lg w-full p-2 text-[18px]"
            type="number "
            placeholder="Search for any IP address or domain"
          />

          <button className="w-8 h-full  bg-black p-2 rounded-r-lg">
            {" "}
            <Image className="  " src={arrowIcon} alt={""} />
          </button>
        </div>
        <div className="flex bg-white p-8 items-center justify-between rounded-lg w-[80%]">
          <Data name={"IP ADDRESS"} output={""} class={"border-r-2"} />
          <Data name={"LOCATION"} output={""} class={"border-r-2"} />
          <Data name={"TIMEZONE"} output={"TIMEZONE"} class={"border-r-2"} />
          <Data name={"ISP"} output={""} class={""} />
        </div>
      </div>
    </div>
  );
}

type DataType = {
  name: string;
  output: string | number;
  class: string;
};

export function Data(props: DataType) {
  return (
    <div className={"flex flex-col bg-w p-2 gap-2 bg-black   ${props.class} "}>
      <p className="bg-green-400  text-[hsl(0,0%,59%)] ">{props.name}</p>
      <p className="bg-yellow-500 w-full text-[hsl(0,0%,17%)]">
        {props.output}{" "}
      </p>
    </div>
  );
}
