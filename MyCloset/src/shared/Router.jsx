import {
  createBrowserRouter,
} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import TopClothes from '../pages/TopClothes'; // 상의 페이지
import BottomClothes from '../pages/BottomClothes'; // 하의 페이지
import OuterClothes from '../pages/OuterClothes'; // 아우터 페이지
import OOTD from '../pages/OOTD'; // OOTD 페이지
import About from '../pages/About'; // 개발자 소개 페이지
import ClothesDetail from '../pages/ClothesDetail'; // 내 옷 상세 페이지
import WeatherRecommend from '../pages/WeatherRecommend'; // 날씨별 옷차림 추천 페이지
import MyClothes from '../pages/MyClothes';
import Proposal from '../pages/Proposal';
import AddOOTD from '../pages/AddOOTD';
import OOTDDetail from '../pages/OOTDDetail';
import EditOOTD from '../pages/EditOOTD';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/top",
    element: <TopClothes />,
  },
  {
    path: "/bottom",
    element: <BottomClothes />,
  },
  {
    path: "/outer",
    element: <OuterClothes />,
  },
  {
    path: "/ootd",
    element: <OOTD />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/weather-recommend",
    element: <WeatherRecommend />,
  },
  {
    path: "/myclothes",
    element: <MyClothes />,
  },
  {
    path: "/clothes/:id",
    element: <ClothesDetail />,
  },
  {
    path: "/proposal",
    element: <Proposal />,
  },
  {
    path: "/add-ootd",
    element: <AddOOTD />,
  },
  {
    path: "/ootd/:id",
    element: <OOTDDetail />,
  },
  {
    path: "/edit-ootd/:id",
    element: <EditOOTD />,
  },
]);

export default Router;