import cn from "classnames";

interface Props {
  value: number;
  skills: string;
}

function Rating(props: Props) {
  const { value, skills } = props;

  return (
    <div>
      <h2 className="text-base leading-tight">{skills}</h2>

      <div className="grid grid-cols-5 gap-1 rounded-sm mt-2">
        {[...Array(5)].map((_, i) => {
          return (
            <div
              key={i}
              className={cn("h-1.5 w-full col-span-1 rounded-sm", {
                "bg-gray-800": i < value,
                "bg-gray-400": i >= value,
              })}
            />
          );
        })}
      </div>
      <br />
    </div>
  );
}

export default Rating;
