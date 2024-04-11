"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const NPProgresProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar height="4px" color="#FF1E00" options={{ showSpinner: false }} shallowRouting />
      </Suspense>
    </>
  );
};

export default NPProgresProvider;
