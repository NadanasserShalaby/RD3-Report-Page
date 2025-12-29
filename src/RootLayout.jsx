import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useSettingsStore } from "./utils/settingsStore";

export default function RootLayout() {
    const { lang } = useSettingsStore();
  return (
    <>
      <div className="min-h-screen flex flex-col" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* <div className="min-h-screen flex flex-col" > */}
        <Header />

        <main className="flex-1 pt-22 pb-14 bg-gray-100">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}