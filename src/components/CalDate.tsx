type props = {
  date: string;
};

const CalDate = (props: any) => {
  const date = new Date(props.date);
  const month = date.toLocaleDateString("default", {
    month: "short",
  });

  const day = date.toLocaleDateString("default", {
    day: "2-digit",
  });

  const year = date.toLocaleDateString("default", {
    year: "numeric",
  });

  return (
    <div className="absolute -top-6 left-0 right-0  flex flex-col mx-auto text-white w-[90px]">
      <span className="bg-yellow-500 text-xs font-bold py-1">{month}</span>
      <span className="bg-black text-xl font-bold pb-1">{day}</span>
      <span className="bg-black text-xs font-bold px-1">{year}</span>
    </div>
  );
};

export default CalDate;
