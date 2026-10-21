export default function App() {
return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Header Section */}
      <header className="bg-slate-900 px-6 py-4">
        <p className="text-3xl font-bold text-white">MyBlog</p>
      </header>

      [/* 2. Hero Section (จัด Contrast, White Space และ Responsive ด้วย md:) */]
      <section className="bg-slate-800 px-6 py-12 md:py-24">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          โลกแห่งเทคโนโลยีและวัตกรรม
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-300">
          แบ่งปันความรู้เกี่ยวกับการเชียนโปรแกรม การพัฒนาเว็บ และเทคโนโลยีสมัยใหม่
        </p>
        <button className="mt-8 rounded bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
          อ่านบทความ
        </button>
      </section>

      {/* 3. Main Content Section (แสดงการ์ดบทความอย่างน้อย 3 บทความ) */}
      <main className="mx-auto max-w-3xl space-y-6 px-6 py-12">
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            บทความที่ 1: ทำความรู้จักกับ Tailwaing CSS v4
            </h2>
          <p className="mt-2 text-gray-600">
            เรียนรู้แนวคิด Utility-first CSS และการตั้งค่าร่วมกับ Vite ที่ง่ายและรวดเร็วยิ่งขึ้น
          </p>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            บทความที่ 2: หลักการ UI/UX สำหรับผู้เริ่มต้น
            </h2>
          <p className="mt-2 text-gray-600">
            การสร้างเว็บไซต์ที่สวยงาม อ่านง่าย และมอบประสบการณ์ที่ดีให้กับผู้ใช้งาน
          </p>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            บทความที่ 3: Responsive Design และ Mobile-First
          </h2>
          <p className="mt-2 text-gray-600">
            เทคนิคการเขียนคลาส Tailwing ให้รองรับทุกขนาดหน้าจอตั้งแต่ สมาร์ตโฟน แท็บแล็ต ถึงคอมพิวเตอร์
          </p>
        </article>
      </main>

      {/* 4. Footer Section */}
      <footer className="bg-slate-900 px-6 py-4 text-center text-sm text-gray-400">
         @ 2026 MyBlog. All rights reserved.
      </footer>
    </div>
  );
}