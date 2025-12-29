import logo from "../../assets/images/rd-logo.png";
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {

  return (
    <header className="bg-white shadow-sm p-3">
      <div className="container mx-auto px-8 py-2 flex items-center justify-between ">
        <img src={logo} alt="logo" className="h-10" />
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[#344155] font-bold text-xl">RD3</h3>
          <LanguageDropdown/>
        </div>
      </div>
    </header>
  );
}
