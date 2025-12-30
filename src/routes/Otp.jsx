import { Lock } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import OTPInput from "react-otp-input";
import { useNavigate, useSearchParams } from "react-router";
import Error from "./Error";

export default function OtpPage() {
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const auth = searchParams.get("Tr");
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/success?Tr=${auth}`);
  };
   if (!auth) {
      return <Error />;
    }
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 ">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full">
        <div className="w-full p-10 flex flex-col justify-center items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
            <Lock className="text-[#5a6268]" />
          </div>

          <h2 className="text-xl font-semibold mt-4">{t("otp.title")}</h2>
          <p className="text-gray-600 mt-2">
            {t("otp.subtitle")} <strong>********5678</strong>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center mt-12">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              placeholder="######"
              renderSeparator={<span className="m-2 text-gray-500">-</span>}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.5rem",
                border: "2px solid #cbd5e1",
                fontSize: "1.5rem",
                textAlign: "center",
                outline: "none",
                transition: "border 0.2s",
              }}
              renderInput={(props) => <input {...props} />}
            />

            <button
              type="submit"
              disabled={otp.length < 6}
              className={`w-full py-3 mt-6 rounded-md text-white font-medium transition
    ${otp.length < 6
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#5a6268] hover:bg-[#6c757d] cursor-pointer"
                }`}
            >
              {t("otp.submit")}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
