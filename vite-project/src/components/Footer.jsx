const Footer = () => {
  return (
    <div className="mt-26 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <img src="./assets/Airalogo.png" alt="" className="w-30 p-1"/>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#">
            <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="#">
            <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
