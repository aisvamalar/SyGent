import influnzLanding from "@/assets/influn_1.png";
import influnzApp from "@/assets/influnz2.png";
import sp1 from "@/assets/speaksi1.png";
import sp2 from "@/assets/speak2.png";
import sp3 from "@/assets/speaksi3.png";
import cp1 from "@/assets/care1.png";
import cp2 from "@/assets/care2.png";
import rwSite from "@/assets/red1.png";
import rwApp from "@/assets/red2.png";
import rwProduct from "@/assets/red3.png";

export type ProjectScreen = {
  src: string;
  alt: string;
  width: number;
  height: number;
  device: "web" | "mobile";
  deviceLabel: string;
  title: string;
};

export const projectGalleries: Record<string, ProjectScreen[]> = {
  influnz: [
    {
      src: influnzLanding,
      alt: "Influnz desktop website landing page",
      width: 1920,
      height: 1160,
      device: "web",
      deviceLabel: "Desktop web",
      title: "Landing page",
    },
    {
      src: influnzApp,
      alt: "Influnz desktop campaign builder with AI assistant",
      width: 1920,
      height: 1034,
      device: "web",
      deviceLabel: "Desktop web",
      title: "AI campaign dashboard",
    },
  ],
  speaksi: [
    {
      src: sp1,
      alt: "SPEAKSI mobile app welcome screen with speech recognition and magic spell",
      width: 859,
      height: 1654,
      device: "mobile",
      deviceLabel: "Mobile app",
      title: "Welcome",
    },
    {
      src: sp2,
      alt: "SPEAKSI mobile app battery care reminder screen",
      width: 796,
      height: 1889,
      device: "mobile",
      deviceLabel: "Mobile app",
      title: "Battery care reminder",
    },
    {
      src: sp3,
      alt: "SPEAKSI mobile app hearing aid monitor screen",
      width: 849,
      height: 1879,
      device: "mobile",
      deviceLabel: "Mobile app",
      title: "Hearing aid monitor",
    },
  ],
  carepath: [
    {
      src: cp1,
      alt: "CAREPATH desktop website secure login",
      width: 1920,
      height: 1070,
      device: "web",
      deviceLabel: "Desktop web",
      title: "Secure login",
    },
    {
      src: cp2,
      alt: "CAREPATH desktop patient dashboard and AI triage",
      width: 1920,
      height: 1031,
      device: "web",
      deviceLabel: "Desktop web",
      title: "Patient dashboard and AI triage",
    },
  ],
  redwolf: [
    {
      src: rwSite,
      alt: "REDWOLF MEDIA desktop website with AR experience and product catalogue",
      width: 1679,
      height: 1124,
      device: "web",
      deviceLabel: "Desktop web",
      title: "AR experience and catalogue",
    },
    {
      src: rwApp,
      alt: "REDWOLF MEDIA mobile website product catalogue",
      width: 714,
      height: 1409,
      device: "mobile",
      deviceLabel: "Mobile web",
      title: "Product catalogue",
    },
    {
      src: rwProduct,
      alt: "REDWOLF MEDIA mobile website 32-inch Easel Standee product details",
      width: 709,
      height: 1399,
      device: "mobile",
      deviceLabel: "Mobile web",
      title: "Product details and AR view",
    },
  ],
};
