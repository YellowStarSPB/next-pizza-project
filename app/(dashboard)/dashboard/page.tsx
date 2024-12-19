import React from 'react';

interface IPageProps {
    className?:string
}

function Page({className}: IPageProps): JSX.Element {
  return (
    <div className={className}>page</div>
  );
}

export default Page;