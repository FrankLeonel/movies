const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container m-auto max-w-[calc(1440px + 48px)] px-6 pt-0 md:px-16 md:max-w-[calc(1440px + 128px)] ">
      {children}
    </div>
  );
};
export default Content;
