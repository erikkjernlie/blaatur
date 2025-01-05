// "use client"

import Spline from '@splinetool/react-spline/next';
// import Spline from '@splinetool/react-spline';

export function SplineBackground() {
  return (
    <main className="w-screen h-[calc(100vh+50px)]">
      <Spline
        // scene="https://prod.spline.design/faNCQroi2cRAEYWB/scene.splinecode"
        // scene="https://prod.spline.design/LCpKdVgTVy9jcUu0/scene.splinecode"
        scene="https://prod.spline.design/LCpKdVgTVy9jcUu0/scene.splinecode"
      />
    </main>
  );
}
