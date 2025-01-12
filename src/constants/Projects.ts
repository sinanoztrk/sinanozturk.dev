import { ProjectListItem } from "@/components/ProjectList";
import * as AC from "@bacons/apple-colors";

export const Projects: ProjectListItem[] = [
  {
    title: "Docvivo Health",
    image: require("@/assets/images/docvivo-health/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-health",
      },
    },
    summary: {
      tr: "Docvivo Health uygulamasını Expo destekli React Native kullanarak geliştirdim. Uygulama, kullanıcıların sağlık verilerini takip edebilmelerini ve bu verileri izinleri doğrultusunda doktorlarıyla paylaşabilmelerini sağlıyor. Doktorlar da kendi panellerinden hastalarının sağlık durumlarını anlık olarak izleyebiliyor.",
      en: "I developed the Docvivo Health app using Expo-supported React Native. The app allows users to track their health data and share it with doctors under their permissions. Doctors can also monitor their patients' health status in real-time through their own panels.",
    },
    features: [
      {
        tr: "Expo ve React Native ile geliştirilmiş mobil uygulama",
        en: "Mobile application developed with Expo and React Native",
      },
      {
        tr: "Kullanıcı sağlık verilerinin gerçek zamanlı takibi",
        en: "Real-time tracking of user health data",
      },
      {
        tr: "Hasta-doktor veri paylaşım sistemi",
        en: "Patient-doctor data sharing system",
      },
      {
        tr: "Kapsamlı doktor kontrol paneli",
        en: "Comprehensive doctor control panel",
      },
      {
        tr: "Detaylı sağlık metrikleri ve raporlama özellikleri",
        en: "Detailed health metrics and reporting features",
      },
    ],
    images: [],
    hint: {
      backgroundColor: AC.systemBlue,
      text: {
        tr: "store'da mevcut",
        en: "on store",
      },
    },
    links: [
      {
        title: "App Store",
        href: "https://apps.apple.com/tr/app/docvivo-health/id6670216913",
      },
    ],
  },
  {
    title: "Docvivo CRM",
    image: require("@/assets/images/docvivo-crm/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-crm",
      },
    },
    summary: {
      tr: "Şu anda çalıştığım şirkette CRM'in frontend kısmını Next.js kullanarak geliştiriyorum. Next.js'in SSR özelliğini aktif olarak kullanarak tüm isteklerin güvenli bir şekilde yönetilmesini sağlıyorum.",
      en: "I am currently developing the frontend of the CRM I work for using Next.js. I use the SSR feature of Next.js to securely manage all requests.",
    },
    features: [
      {
        tr: "Next.js ile güvenli SSR implementasyonu",
        en: "Secure SSR implementation with Next.js",
      },
      {
        tr: "Özel tasarlanmış kullanıcı arayüzü",
        en: "Custom designed user interface",
      },
      {
        tr: "İzin tabanlı erişim kontrolü",
        en: "Permission-based access control",
      },
      {
        tr: "Doktor randevuları yönetimi",
        en: "Doctor appointment management",
      },
      {
        tr: "Randevu takvimi ve limit yönetimi",
        en: "Appointment calendar and limit management",
      },
    ],
    images: [
      "/images/docvivo-crm/isometric-3.png",
      "/images/docvivo-crm/isometric-2.png",
      "/images/docvivo-crm/isometric-1.png",
      "/images/docvivo-crm/builder-template-1.png",
      "/images/docvivo-crm/builder-template.png",
      "/images/docvivo-crm/builder-form.png",
      "/images/docvivo-crm/builder-form-1.png",
    ],
    hint: {
      backgroundColor: AC.systemGreen,
      text: {
        tr: "web'de mevcut",
        en: "on web",
      },
    },
    links: [
      {
        title: "Docvivo",
        href: "https://docvivo.com",
      },
    ],
  },
  {
    title: "Docvivo Mobile",
    image: require("@/assets/images/docvivo-mobile/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-mobile",
      },
    },
    summary: {
      tr: "React Native ile geliştirilen Docvivo App, hastaları ve doktorları belirli kriterlere göre eşleştiren bir mobil uygulama projesidir.",
      en: "I developed the Docvivo App using React Native. The app matches patients and doctors based on specific criteria. It includes a doctor portal for managing patient records and a patient portal for managing doctor records.",
    },
    features: [
      {
        tr: "React Native implementasyonu",
        en: "React Native implementation",
      },
      {
        tr: "Tinder benzeri eşleştirme algoritması",
        en: "Tinder-like matching algorithm",
      },
      {
        tr: "Doktor ve hasta portalleri",
        en: "Doctor and patient portals",
      },
      {
        tr: "Dinamik kayıt süreci",
        en: "Dynamic registration process",
      },
      {
        tr: "Özelleştirilmiş eşleştirme sistemi",
        en: "Customized matching system",
      },
    ],
    images: [
      "/images/docvivo-mobile/image-1.png",
      "/images/docvivo-mobile/image-2.png",
      "/images/docvivo-mobile/image-3.png",
      "/images/docvivo-mobile/image-4.png",
      "/images/docvivo-mobile/image-5.png",
      "/images/docvivo-mobile/image-6.png",
      "/images/docvivo-mobile/image-7.png",
      "/images/docvivo-mobile/image-8.png",
    ],
  },
  {
    title: "Mobilyaka",
    image: require("@/assets/images/mobilyaka/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "mobilyaka",
      },
    },
    summary: {
      tr: "Şirket içi iletişimi güçlendiren ve çalışanları her zaman, her yerde etkileşim içinde tutan bir kurumsal mobil uygulama ve intranet portalı.",
      en: "I developed the Mobilyaka app using React Native. The app strengthens internal communication and keeps employees always in touch, anywhere.",
    },
    features: [
      {
        tr: "Next.js ile geliştirilmiş platform",
        en: "Platform developed with Next.js",
      },
      {
        tr: "Şirket içi haber ve duyuru sistemi",
        en: "Internal news and announcement system",
      },
      {
        tr: "Eğitim ve gelişim modülü",
        en: "Training and development module",
      },
      {
        tr: "Anlık bildirim sistemi",
        en: "Real-time notification system",
      },
      {
        tr: "Özel gün kutlamaları",
        en: "Special day celebrations",
      },
      {
        tr: "İş kazası önleme desteği",
        en: "Work accident prevention support",
      },
      {
        tr: "Konum paylaşımı",
        en: "Location sharing",
      },
    ],
    images: [
      "/images/mobilyaka/desktop-1.webp",
      "/images/mobilyaka/desktop-2.webp",
      "/images/mobilyaka/desktop-3.webp",
      "/images/mobilyaka/desktop-4.webp",
      "/images/mobilyaka/desktop-5.webp",
      "/images/mobilyaka/desktop-6.webp",
    ],
    hint: {
      backgroundColor: AC.systemOrange,
      text: {
        tr: "web'de mevcut",
        en: "on web",
      },
    },
    links: [
      {
        title: "Mobilyaka",
        href: "https://mobilyaka.com",
      },
    ],
  },
  {
    title: "Heyvet",
    image: require("@/assets/images/heyvet/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "heyvet",
      },
    },
    summary: {
      tr: "React Native ile geliştirilen HeyVet, veterinerler ve hayvan sahiplerini buluşturan bir mobil platform.",
      en: "I developed the HeyVet app using React Native. The app connects veterinarians and animal owners.",
    },
    features: [
      {
        tr: "React Native implementasyonu",
        en: "React Native implementation",
      },
      {
        tr: "Veteriner arama sistemi",
        en: "Veterinarian search system",
      },
      {
        tr: "Anlık mesajlaşma",
        en: "Real-time messaging",
      },
      {
        tr: "Randevu sistemi",
        en: "Appointment system",
      },
      {
        tr: "Canlı destek",
        en: "Live support",
      },
    ],
    images: [
      "/images/heyvet/image-1.png",
      "/images/heyvet/image-2.png",
      "/images/heyvet/image-3.png",
      "/images/heyvet/image-4.png",
      "/images/heyvet/image-5.png",
      "/images/heyvet/image-6.png",
    ],
  },
  {
    title: "Emlak Konut",
    image: require("@/assets/images/emlak-konut/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "emlak-konut",
      },
    },
    summary: {
      tr: "Emlak Konut GYO için React Native ile geliştirilen, gayrimenkul ihalelerine anlık teklif verme imkanı sunan mobil uygulama.",
      en: "I developed the Emlak Konut app using React Native. The app allows users to place instant bids on real estate auctions.",
    },
    features: [
      {
        tr: "React Native implementasyonu",
        en: "React Native implementation",
      },
      {
        tr: "Anlık ihale teklif sistemi",
        en: "Real-time auction bidding system",
      },
      {
        tr: "Geçmiş teklifleri görüntüleme",
        en: "View bid history",
      },
      {
        tr: "İhale takip sistemi",
        en: "Auction tracking system",
      },
      {
        tr: "Mobil ödeme entegrasyonu",
        en: "Mobile payment integration",
      },
    ],
    images: [
      "/images/emlak-konut/image-1.png",
      "/images/emlak-konut/image-2.png",
      "/images/emlak-konut/image-3.png",
      "/images/emlak-konut/image-4.png",
    ],
  },
  {
    title: "Toki",
    image: require("@/assets/images/toki/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "toki",
      },
    },
    summary: {
      tr: "TOKİ için Next.js ile geliştirilen, projeleri ve ihaleleri görüntüleme platformu.",
      en: "I developed the TOKİ app using Next.js. The app allows users to view projects and auctions.",
    },
    features: [
      {
        tr: "Next.js implementasyonu",
        en: "Next.js implementation",
      },
      {
        tr: "Proje görüntüleme sistemi",
        en: "Project viewing system",
      },
      {
        tr: "İhale takip sistemi",
        en: "Auction tracking system",
      },
      {
        tr: "Çalışan bilgi portalı",
        en: "Employee information portal",
      },
      {
        tr: "Performans optimizasyonu",
        en: "Performance optimization",
      },
    ],
    images: [
      "/images/toki/desktop-1.webp",
      "/images/toki/desktop-2.webp",
      "/images/toki/desktop-3.webp",
    ],
  },
  {
    title: "Halk Yatırım",
    image: require("@/assets/images/halk-yatirim/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "halk-yatirim",
      },
    },
    summary: {
      tr: "Halk Yatırım için Next.js ile geliştirilen modern landing sayfası.",
      en: "I developed the Halk Yatırım app using Next.js. The app is a modern landing page for Halk Yatırım.",
    },
    features: [
      {
        tr: "Next.js implementasyonu",
        en: "Next.js implementation",
      },
      {
        tr: "Responsive tasarım",
        en: "Responsive design",
      },
      {
        tr: "Animasyon entegrasyonu",
        en: "Animation integration",
      },
      {
        tr: "SEO optimizasyonu",
        en: "SEO optimization",
      },
      {
        tr: "Yüksek performans",
        en: "High performance",
      },
    ],
    images: [
      "/images/halk-yatirim/desktop-1.webp",
      "/images/halk-yatirim/mobile-1.png",
      "/images/halk-yatirim/mobile-2.png",
      "/images/halk-yatirim/mobile-3.png",
      "/images/halk-yatirim/desktop-2.webp",
      "/images/halk-yatirim/desktop-3.webp",
    ],
  },
];
