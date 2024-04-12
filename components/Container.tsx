export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-5 md:mx-10 py-5">{children}</div>;
}
