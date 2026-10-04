import HeroImage from "/assets/fotoaira.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/git.png";
import Tools13 from "/assets/tools/gdevelop5.jpg";
import Tools14 from "/assets/tools/Cisco.webp";
import Tools15 from "/assets/tools/mikrotik.png";
import Tools16 from "/assets/tools/ciscopt.webp";
import Tools17 from "/assets/tools/eveng.png";
import Tools18 from "/assets/tools/windows.webp";

export const listTools = [
  // webdev
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    kategori: "web",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    kategori: "web",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    kategori: "web",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    kategori: "web",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Vite",
    ket: "Framework",
    kategori: "web",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    kategori: "web",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "PHP",
    ket: "Language",
    kategori: "web",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    kategori: "web",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    kategori: "web",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    kategori: "web",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    kategori: "web",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Git",
    ket: "Version Control",
    kategori: "web",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "GDevelop 5",
    ket: "Game Maker",
    kategori: "web",
    dad: "1300",
  },
  // network
  {
    id: 14,
    gambar: Tools14,
    nama: "Cisco IOS",
    ket: "Network Configuration",
    kategori: "networking",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Mikrotik",
    ket: "Network Platform",
    kategori: "networking",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Cisco Packet Tracer",
    ket: "Network Simulator",
    kategori: "networking",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "EVE-NG",
    ket: "Network Emulator",
    kategori: "networking",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Windows",
    ket: "Operating System",
    kategori: "networking",
    dad: "1800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";
import Proyek7 from "/assets/proyek/proyek7.png";
import Proyek8 from "/assets/proyek/proyek8.png";
import Proyek9 from "/assets/proyek/proyek9.png";
import Proyek10 from "/assets/proyek/proyek10.png";
import Proyek11 from "/assets/proyek/proyek11.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "DoEi",
    desk: "UI/UX aplikasi mobile untuk streaming film Jepang dengan desain modern dan user-friendly.",
    tools: ["Figma", "Mobile"],
    dad: "200",
    link: "https://www.figma.com/proto/Xw1MQ9UWFDjjmJe5tQh9tS/DoEi?node-id=18-45&p=f&t=qHYMlONPknewhJ0R-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A45&show-proto-sidebar=1",
    linkgit: "https://www.figma.com/design/Xw1MQ9UWFDjjmJe5tQh9tS/DoEi?node-id=0-1&p=f&t=qHYMlONPknewhJ0R-0",
    linkName: "Figma",
    LinkIcon: "ri-figma-line",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Portofolio",
    desk: "Website portfolio pribadi yang menampilkan profil, dan berbagai project yang pernah dikerjakan.",
    tools: ["HTML", "CSS", "Tailwind CSS", "AOS"],
    dad: "300",
    link: "https://khmaira.netlify.app/",
    linkgit: "https://app.netlify.com/projects/khmaira/deploys",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "PURF",
    desk: "Website e-commerce parfum dengan fitur rekomendasi untuk membantu pengguna menemukan parfum yang sesuai.",
    tools: ["HTML", "CSS", "JavaScript"],
    dad: "400",
    link: "https://airairadev.github.io/PURF/",
    linkgit: "https://github.com/AirairaDev/PURF",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Game Edukasi Pendidikan Pancasila",
    desk: "Game edukasi interaktif untuk siswa kelas 2 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "500",
    link: "https://gd.games/Aidevbie/Pendidikan-Pancasila-Kelas-2-Bab-1-Konten-1",
    linkgit: "https://github.com/SoluEdu/pendidikan_pancasila-k2b1b1",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Game Edukasi Matematika",
    desk: "Game edukasi interaktif untuk siswa kelas 3 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "600",
    link: "https://gd.games/Aidevbie/Matematika-Kelas-3-Bab-3",
    linkgit: "https://github.com/SoluEdu/matematika-k3b3",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Game Edukasi IPAS Kelas 4",
    desk: "Game edukasi interaktif untuk siswa kelas 4 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "700",
    link: "https://gd.games/Aidevbie/IPAS-Kelas-4-Bab-1",
    linkgit: "https://github.com/SoluEdu/ipas-k4b1",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Game Edukasi B.Indonesia",
    desk: "Game edukasi interaktif untuk siswa kelas 1 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "800",
    link: "https://gd.games/Aidevbie/Bahasa-Indonesia-Kelas-1-Bab-2",
    linkgit: "https://github.com/SoluEdu/bahasa_indonesia-k1b2",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Game Edukasi IPAS Kelas 5",
    desk: "Game edukasi interaktif untuk siswa kelas 5 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "900",
    link: "https://gd.games/Aidevbie/IPAS-Kelas-5-Bab-7",
    linkgit: "https://github.com/SoluEdu/ipas-k5b7",
  },
  {
    id: 9,
    gambar: Proyek9,
    nama: "Game Edukasi B.Indonesia",
    desk: "Game edukasi interaktif untuk siswa kelas 4 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "1000",
    link: "https://gd.games/Aidevbie/Bahasa-Indonesia-Kelas-4-Bab-4",
    linkgit: "https://github.com/SoluEdu/bahasa_indonesia-k4b4",
  },
  {
    id: 10,
    gambar: Proyek10,
    nama: "Game Edukasi IPAS Kelas 4",
    desk: "Game edukasi interaktif untuk siswa kelas 4 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "1100",
    link: "https://gd.games/Aidevbie/IPAS-Kelas-4-Bab-6",
    linkgit: "https://github.com/SoluEdu/ipas-k4b6",
  },
  {
    id: 11,
    gambar: Proyek11,
    nama: "Game Edukasi Matematika",
    desk: "Game edukasi interaktif untuk siswa kelas 6 SD",
    tools: ["Gdevelop 5", "Figma"],
    dad: "1200",
    link: "https://gd.games/Aidevbie/Matematika-Kelas-6-Bab-1-Konten-1",
    linkgit: "https://github.com/SoluEdu/matematika-k6b1b1",
  },
];
