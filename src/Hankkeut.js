import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Header from './component/Header';
import Swipers from './component/Swipers';
import Intro from './component/routes/Intro'
import Gridswp from './component/routes/Gridswp'
import Notice from './component/Notice';
import Qna from './component/Qna';
import Request from './component/Request';
import Footer from './component/Foorter';


function Hankkeut() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Swipers contentid="banner" title="banner" section="bannerSection" view1="1" view2="1" delay="4000" row="3" sb="10"></Swipers>
    
    <nav>
      <Link to={"/"}>소개 </Link>
      <Link to={"/lecture"}>강의 </Link>
      <Link to={"/gallery"}>갤러리</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/lecture" element={<Gridswp contentid="lecture" section="lectureSection" />} />
      <Route path="/gallery" element={<Gridswp contentid="gallery" section="gallerySection" />} />
    </Routes>

    <Swipers contentid="review" title="Review" section="reviewSection"  view1="3" view2="2" delay="6000" row="1" sb="0"></Swipers>
    <Notice></Notice>
    <Qna></Qna>
    <Request></Request>
    <Footer></Footer>
    </BrowserRouter>
  );
}



export default Hankkeut;
