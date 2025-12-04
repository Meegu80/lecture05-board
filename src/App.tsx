import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Detail from "./pages/Detail.tsx";

function App() {
    // routing 처리
    // 1. 브라우저 라우터 ->프로바이더 를 먼저 호출해야함
    // 2. Routes/ Route로 감싸고 path와 element로 구성
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/detail/:id"} element={<Detail/>}></Route>
                <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;