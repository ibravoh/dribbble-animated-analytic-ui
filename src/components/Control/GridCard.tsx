interface Props {
  children: React.ReactNode;
}
export const GridCard = ({ children }: Props) => {
  return <div className="bg-[#f9f9f9] rounded-2xl py-4 px-16 w-full">{children}</div>;
};
