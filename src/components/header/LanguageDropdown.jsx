import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useSettingsStore } from "../../utils/settingsStore";

export default function LanguageDropdown() {
  const { lang, setLanguage } = useSettingsStore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
      >
        <Globe size={20} className="text-[#344155]" />
      </div>

      {open && (
        <div
          className="absolute end-0 mt-3 w-40 rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden z-50"
        >
          <button
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            className="w-full text-start px-4 py-3 hover:bg-gray-100 transition"
          >
            English
          </button>

          <button
            onClick={() => {
              setLanguage("ar");
              setOpen(false);
            }}
            className="w-full text-start px-4 py-3 hover:bg-gray-100 transition"
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
}
