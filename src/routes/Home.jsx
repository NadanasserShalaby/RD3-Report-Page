export default function Home() {
  return (
    <section className="container mt-10 mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl border rounded-xl bg-white p-8">

          <div className="mb-8 text-center space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              تأكيد طلب الزيارة
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Visit Request for Activating The Insurance Policy Against Hidden
              Defects for Project Number
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم
              </label>
              <input
                type="text"
                placeholder="اكتب الاسم بالكامل"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5
                  focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم الهاتف
              </label>
              <input
                type="text"
                placeholder="01xxxxxxxxx"
                className="w-full rounded-md border border-gray-300 px-4 py-2.5
                  focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <button
              type="button"
              className="w-full py-3 mt-2 rounded-md text-white font-medium
                bg-[#6c757d] hover:bg-[#5a6268] transition"
            >
              تأكيد الطلب
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
