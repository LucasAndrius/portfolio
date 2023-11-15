type Props = {
  label: string;
  url: string;
};

export const ButtonLink = (props: Props) => {
  return (
    <a
      href={props.url}
      className="px-4 py-2 bg-white text-orange-400 font-extrabold rounded-md"
    >
      {props.label}
    </a>
  );
};
