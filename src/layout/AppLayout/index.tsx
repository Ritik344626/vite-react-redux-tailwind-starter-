import { JSX } from 'react';
const AppLayout = (props: { children?: JSX.Element }) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default AppLayout;
