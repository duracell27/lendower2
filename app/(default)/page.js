

export default function Home() {
  return (
    <main className="min-h-screen bg-green-700 flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <div className="p-6 rounded-xl shadow-xl shadow-black/30 bg-green-800 text-xl text-white text-center">
          <p>Щоб почати користуватись, увійдіть</p>
        </div>
        <div className="p-6 rounded-xl shadow-xl shadow-black/30 bg-green-800 text-xl text-center text-white">
          <p className="text-white text-xl">Ми допомогли розрахувати вже:</p>
          <p className="text-white text-xl font-bold">$15 000</p>
          <p className="text-white text-xl">спільних бюджетів</p>
        </div>
      </div>
    </main>
  );
}
