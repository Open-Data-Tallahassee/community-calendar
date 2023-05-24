// 'use client';
import EventCard from "../components/EventCard";
import { events } from "../constants/constants";

export default async function Home() {
  // const data = await getData();
  // console.log(data);
  return (
    <>
      <div className="h-screen w-screen">
        <div></div>
        <div className="py-5 text-center text-4xl font-bold">
          Community Calender
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 max-w-screen place-items-center">
          {events &&
            events.map((event, index) => (
              <EventCard event={event} url={""} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
