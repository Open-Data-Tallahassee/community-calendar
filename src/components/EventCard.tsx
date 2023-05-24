import Image from "next/image";
import { Suspense } from "react";
import CalDate from "./CalDate";

type props = {
  event: Event;
  url: string;
  key: number;
};

const EventCard = (props: any) => {
  return (
    <div className="pb-3 border shadow-lg text-center max-w-[480px] max-h-[613px] min-h-[600px]">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            src={"/images/placeholder.jpeg"}
            alt="Picture of the author"
            width={480}
            height={360}
            className="transform transition-transform duration-700 hover:scale-[1.03]"
          />
        </Suspense>
      </div>
      <div className="relative px-5 pt-20">
        <CalDate date={props.event.date} />
        <div className="text-2xl font-bold">
          {props.event.title.toUpperCase()}
        </div>
        <div className="line-clamp-4 font-light text-sm">
          {props.event.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
