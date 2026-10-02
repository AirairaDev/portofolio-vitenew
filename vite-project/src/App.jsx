import DataImage from "./data";
import { InteractiveProductCard } from "./components/card-7";
import {listTools, listProyek} from "./data";
import DarkVeil from "./components/Darkveil";



function App() {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">

    <div className="fixed inset-0 -z-10">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
    </div>

    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        {/* <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-b-md"/> */}
        <q>Belajar dari setiap langkah, tumbuh dari setiap pengalaman.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mt-5">Khumairah Afrida</h1>
        <h2 className="text-4xl font-medium mb-6">Web Developer</h2>
        <p className="text-base/loose mb-6 opacity-50">IT Enthusiast yang tertarik pada teknologi, web development, dan pemrograman. Terus belajar, berkarya, dan mengembangkan skill melalui berbagai project.</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 hover:border border-white">Service <i className="ri-arrow-right-up-line ri-lg"></i></a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 hover:border border-white">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <InteractiveProductCard imageUrl={DataImage.HeroImage} alt="Hero Image" className="w-85 md:ml-auto mr-7 " loading="lazy"/>
    </div>

    {/* tentang */}
    <div className="tentang mt-26 py-10" id="tentang">
    <h1 className="text-4xl/snug font-bold mb-7">Tentang Saya</h1>
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 backdrop-brightness-50 rounded-lg">
        <img src={DataImage.HeroImage}alt="Image" className="w-12 rounded-b-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10">Saya adalah seorang pelajar yang memiliki ketertarikan pada dunia teknologi dan pengembangan digital. Saya senang mengeksplorasi web development, mempelajari teknologi baru, serta mengubah ide menjadi sebuah karya yang fungsional dan menarik.</p>
        <p className="text-base/loose mb-10">Melalui berbagai project yang saya kerjakan, saya terus mengembangkan kemampuan dalam coding, problem solving, dan kreativitas. Saya percaya bahwa proses belajar tidak pernah berhenti, dan setiap project merupakan kesempatan untuk berkembang menjadi lebih baik.</p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">3<span className="text-violet-500">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-26">
        <h1 className="text-4xl/snug font-bold mb-4">Tools</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design</p>
        <div className="toolsbox mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-b-md hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="tollsimg" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>

          ))}

        </div>
      </div>
    </div>

    {/* tentang */}

    {/* proyek */}

<div className="proyek mt-32 py-10" id="proyek">
  <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
  <p className="text-base/loose text-center opacity-50">Berikut ini beberapa proyek yang telah saya buat</p>
  <div className="proyekbox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map(proyek => (
      <div key={proyek.id} className="p-4 bg-zinc-800 rounded-b-md">
        <img src={proyek.gambar} alt="proyekimg" loading="lazy"/>
        <div>
          <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
          <p className="text-base/loose mb-4">{proyek.desk}</p>
          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, index) => (
              <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-b-md font-semibold" key={index}>{tool}</p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a className="bg-violet-700 p-3 rounded-b-lg block border border-zinc-600 hover:bg-violet-600" href="#">Demo</a>
          </div>
        </div>
      </div>

    ))}
  </div>
</div>

    {/* proyek */}

    {/* kontak */}
    <div className="kontak mt-26 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
      <p className="text-base/loose text-center mb-10 opacity-50">Mari terhubung dengan saya.</p>
      <form action="https://formsubmit.co/khumairah1405@email.com" method="POST"
       className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-b-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
    {/* kontak */}
    </div>
    </>
  )
}

export default App
