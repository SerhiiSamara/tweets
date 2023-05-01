import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';



export const SharedLayout = () => {
  return (
        <>
          <main>
            <Suspense>
              <Outlet />
            </Suspense>
          </main>
        </>
  );
};
