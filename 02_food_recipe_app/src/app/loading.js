import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full ">
      <Skeleton className="w-[100px] h-[20px]  rounded-full" />
    </div>
  );
};

export default Loading;
