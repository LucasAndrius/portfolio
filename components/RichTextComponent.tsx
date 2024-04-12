import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Merriweather, Yeseva_One } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
});

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="flex flex-col items-center">
        <Image
          src={urlForImage(value).url()}
          alt={value}
          className="w-full md:max-w-[60vw] md:max-h-[70vh]"
          width={1080}
          height={1080}
          style={{ objectFit: "scale-down" }}
          quality={100}
        />
      </div>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <ul className="text-xs md:text-base ml-5 md:ml-10 py-2 list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }: any) => (
      <ul className="text-xs md:text-base ml-5 md:ml-10 py-2 list-disc space-y-5">
        <li>{children}</li>
      </ul>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h2
        className={`text-xl md:text-3xl py-5 md:py-10  ${merriweather.className}`}
      >
        {children}
      </h2>
    ),
    h2: ({ children }: any) => (
      <h3 className="font-semibold md:text-4xl py-5 md:py-10 uppercase">
        {children}
      </h3>
    ),
    h3: ({ children }: any) => (
      <h4 className="md:text-2xl py-10 uppercase">{children}</h4>
    ),
    h4: ({ children }: any) => (
      <h5 className="font-semibold md:text-xl py-10">{children}</h5>
    ),
    h5: ({ children }: any) => (
      <h5 className="italic md:text-xl py-10">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="md:text-xl border-b-2 pb-1 max-w-fit border-myBlack py-10">
        {children}
      </h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-yellow-500 pl-4 my-10 sm:my-16 ml-6 sm:ml-32 break-words">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-sm sm:text-base my-5 text-left">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="font-semibold underline"
          target="_blank"
        >
          {children}
        </Link>
      );
    },
  },
};
