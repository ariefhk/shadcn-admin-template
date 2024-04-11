type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Readonly<Props>) => {
  return <main>{children}</main>;
};

export default Layout;
