import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage'));


export const App = () => {

	return (
	  <Routes>
      <Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
			</Route>
    </Routes>
)
};
