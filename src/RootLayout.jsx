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

      <main className="flex-1 flex justify-center items-center bg-gray-100 px-4">
        <div
          className="
            w-full
            max-w-2xl
            max-h-[calc(100vh-170px)]
            overflow-y-auto
          "
        >
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}