import { PT_Sans_Caption } from "next/font/google";
import Container from "../Container";
const sansCaption = PT_Sans_Caption({ subsets: ["latin"], weight: "400" });

type Props = {
  title: string;
  subtitle?: string;
};

export const H1 = (props: Props) => {
  return (
    <h1
      className="text-xl md:text-4xl w-fit font-bold"
      content={sansCaption.className}
    >
      {props.title} <br />{" "}
      <span className="text-sm md:text-base text-gray-600">
        {props.subtitle}
      </span>
    </h1>
  );
};
