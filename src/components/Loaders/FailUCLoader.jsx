import React from 'react';
import { BallTriangle, Bars, Circles, Grid, Oval, Puff, Rings, TailSpin, ThreeDots, Hearts, RotatingPlane, Plane, MutatingDots } from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      {/* <BallTriangle height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Bars height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Circles height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Grid height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Oval height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Puff height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Rings height={100} width={100} color="#4fa94d" ariaLabel="loading" /> */}
      <TailSpin height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      {/* <ThreeDots height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Hearts height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <RotatingPlane height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <Plane height={100} width={100} color="#4fa94d" ariaLabel="loading" />
      <MutatingDots height={100} width={100} color="#4fa94d" ariaLabel="loading" /> */}
      {/* <CradleLoader height={100} width={100} color="#4fa94d" ariaLabel="loading" /> */}
    </div>
  );
};

export default LoaderComponent;
