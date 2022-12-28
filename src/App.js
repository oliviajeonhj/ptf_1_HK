import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Header from './component/Header';
import Swipers from './component/Swipers';
import Intro from './component/routes/Intro'
import Lecture from './component/routes/Lecture'
import Gallery from './component/routes/Gallery'
import Notice from './component/Notice';
import Request from './component/Request';
import Footer from './component/Foorter';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Swipers contentid="banner" title="banner" section="bannerSection" view1="2" view2="1" delay="3000"></Swipers>
    
    <nav>
      <Link to={"/"}>소개 </Link>
      <Link to={"/lecture"}>강의 </Link>
      <Link to={"/gallery"}>갤러리</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/lecture" element={<Lecture />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>

    <Swipers contentid="review" title="Review" section="reviewSection"  view1="3" view2="2" delay="5000"></Swipers>
    <Notice></Notice>
    <Request></Request>
    <Footer></Footer>
    </BrowserRouter>
  );
}



export default App;
