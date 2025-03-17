type TwoColumnLayoutProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};
export default function TwoColumnLayout({
  children,
  sidebar,
}: TwoColumnLayoutProps) {
  return (
    <div className={"container mx-auto mb-8 mt-8 md:flex md:space-x-12"}>
      <div className={"md:w-2/3"}>{children}</div>
      <div className={"md:w-1/3"}>{sidebar}</div>
    </div>
  );
}
