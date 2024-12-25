import Home from '../pages/Home';
import Video from '../layouts/components/Video';
import WareHouse from '../pages/WareHouse';
import Movie from '../pages/Movie';
import PhimBo from '../pages/PhimBo';
import PhimThue from '../pages/PhimThue';
import Search from '../pages/Search';
import Categories from '../pages/Categories';
import Countries from '../pages/Countries';
import InfoMovie from '../pages/InfoMovie';
import PlayVideo from '../layouts/PlayVideo';

import config from '../components/config';
// import config from '~/components/config';

const publicRoutes = [
    { path: config.routes.Home, component: Home },
    { path: config.routes.WareHouse, component: WareHouse },
    { path: config.routes.PlayerUrl, component: Video, layout: PlayVideo },
    { path: config.routes.InfoMovieUrl, component: InfoMovie },
    { path: config.routes.Movie, component: Movie },
    { path: config.routes.PhimBo, component: PhimBo },
    { path: config.routes.PhimThue, component: PhimThue },
    { path: config.routes.Search, component: Search },
    { path: config.routes.PhimDienAnhSearch, component: Categories },
    { path: config.routes.PhimThueSearch, component: Countries },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
