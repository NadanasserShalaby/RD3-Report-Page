import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import TextField from "../components/shared/TextField";
import { homeSchema } from "../features/home/schema";
import { useNavigate, useSearchParams } from "react-router";
import Error from "./Error";

export default function Home() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const auth = searchParams.get("Tr");
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false); 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(homeSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    reset();
    navigate(`/otp?Tr=${auth}`);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };
  if (!auth) {
    return <Error />;
  }

  return (
    <section className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl border rounded-xl bg-white p-8">

          <div className="mb-8 text-center space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              {t("home.title")}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("home.subtitle")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <TextField
              type="text"
              label={t("home.nameLabel")}
              placeholder={t("home.namePlaceholder")}
              error={
                errors.name?.message
                  ? t(errors.name.message)
                  : undefined
              }
              {...register("name")}
            />

            <TextField
              label={t("home.phoneLabel")}
              placeholder={t("home.phonePlaceholder")}
              error={
                errors.phone?.message
                  ? t(errors.phone.message)
                  : undefined
              }
              {...register("phone")}
              type="number"
            />

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-md text-white font-medium
                hover:bg-[#6c757d] bg-[#5a6268] transition"
            >
              {t("home.submit")}
            </button>
          </form>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{t("home.confirmTitle")}</h3>
            <p className="text-gray-600 mb-6">{t("home.confirmMessage")}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-md border border-gray-300"
              >
                {t("home.cancel")}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-md bg-[#5a6268] text-white hover:bg-[#6c757d]"
              >
                {t("home.confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
