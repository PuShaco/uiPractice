import { SearchBar } from "@/components/ui/search-bar";
import logo from "@/assets/icons/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="w-full h-20 flex items-center p-6 gap-6">
        <div className="w-1/2 flex items-center justify-start gap-6">
          <div className="h-full flex items-center justify-center gap-2">
            <img src={logo} alt="" className="h-10" />
            <h3 className="poppins-bold scroll-m-20 text-2xl  tracking-tight text-white">
              Weather.io
            </h3>
          </div>
          <SearchBar
            placeholder="검색할 지역 이름을 영어로 입력하세요."
            className="flex-1"
          />
        </div>
      </header>
    </>
  );
}
