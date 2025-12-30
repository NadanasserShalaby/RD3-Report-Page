import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full">
        <div className="w-full p-10 flex flex-col justify-center items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mt-4">{t("notfound.title")}</h2>
          <p className="text-gray-600 mt-2 text-center">{t("notfound.subtitle")}</p>
        </div>
      </div>
    </div>
  );
}
