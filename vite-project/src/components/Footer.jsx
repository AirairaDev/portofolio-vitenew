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
        <a href="https://github.com/AirairaDev">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/khmirahaa?stkn=aWo4Znc3ZTk0aGVl">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/khumairah-afrida-maryam-366a023b7?utm_source=share_via&utm_content=profile&utm_medium=member_android">
            <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://wa.me/6285880752069">
            <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
