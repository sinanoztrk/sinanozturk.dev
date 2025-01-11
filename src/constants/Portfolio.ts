import { PortfolioListItem } from "@/components/PortfolioList";
import { Href } from "expo-router";

export const PortfolioItems: PortfolioListItem[] = [
  {
    title: "Docvivo CRM",
    image: require("../assets/images/project/docvivo-crm/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-crm",
      },
    },
    summary:
      "Şu anda çalıştığım şirkette CRM'in frontend kısmını Next.js kullanarak geliştiriyorum. Next.js'in SSR özelliğini aktif olarak kullanarak tüm isteklerin güvenli bir şekilde yönetilmesini sağlıyorum.",
    features: [
      "Next.js ile güvenli SSR implementasyonu",
      "Özel tasarlanmış kullanıcı arayüzü",
      "İzin tabanlı erişim kontrolü",
      "Doktor randevuları yönetimi",
      "Randevu takvimi ve limit yönetimi",
    ],
    images: [
      require("../assets/images/project/docvivo-crm/isometric-3.png"),
      require("../assets/images/project/docvivo-crm/isometric-2.png"),
      require("../assets/images/project/docvivo-crm/isometric-1.png"),
      require("../assets/images/project/docvivo-crm/builder-template-1.png"),
      require("../assets/images/project/docvivo-crm/builder-template.png"),
      require("../assets/images/project/docvivo-crm/builder-form.png"),
      require("../assets/images/project/docvivo-crm/builder-form-1.png"),
    ],
    links: [
      {
        title: "Docvivo",
        href: "https://docvivo.com",
      },
    ],
  },
  {
    title: "Docvivo Health",
    image: require("../assets/images/project/docvivo-health/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-health",
      },
    },
    summary:
      "Docvivo Health uygulamasını Expo destekli React Native kullanarak geliştirdim. Uygulama, kullanıcıların sağlık verilerini takip edebilmelerini ve bu verileri izinleri doğrultusunda doktorlarıyla paylaşabilmelerini sağlıyor. Doktorlar da kendi panellerinden hastalarının sağlık durumlarını anlık olarak izleyebiliyor.",
    features: [
      "Expo ve React Native ile geliştirilmiş mobil uygulama",
      "Kullanıcı sağlık verilerinin gerçek zamanlı takibi",
      "Hasta-doktor veri paylaşım sistemi",
      "Kapsamlı doktor kontrol paneli",
      "Detaylı sağlık metrikleri ve raporlama özellikleri",
    ],
    images: [],
    links: [
      {
        title: "App Store",
        href: "https://apps.apple.com/tr/app/docvivo-health/id6670216913",
      },
    ],
  },
  {
    title: "Docvivo Mobile",
    image: require("../assets/images/project/docvivo-mobile/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "docvivo-mobile",
      },
    },
    summary:
      "React Native ile geliştirilen Docvivo App, hastaları ve doktorları belirli kriterlere göre eşleştiren bir mobil uygulama projesidir.",
    features: [
      "React Native implementasyonu",
      "Tinder benzeri eşleştirme algoritması",
      "Doktor ve hasta portalleri",
      "Dinamik kayıt süreci",
      "Özelleştirilmiş eşleştirme sistemi",
    ],
    images: [
      require("../assets/images/project/docvivo-mobile/image-1.png"),
      require("../assets/images/project/docvivo-mobile/image-2.png"),
      require("../assets/images/project/docvivo-mobile/image-3.png"),
      require("../assets/images/project/docvivo-mobile/image-4.png"),
      require("../assets/images/project/docvivo-mobile/image-5.png"),
      require("../assets/images/project/docvivo-mobile/image-6.png"),
      require("../assets/images/project/docvivo-mobile/image-7.png"),
      require("../assets/images/project/docvivo-mobile/image-8.png"),
    ],
  },
  {
    title: "Mobilyaka",
    image: require("../assets/images/project/mobilyaka/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "mobilyaka",
      },
    },
    summary:
      "Şirket içi iletişimi güçlendiren ve çalışanları her zaman, her yerde etkileşim içinde tutan bir kurumsal mobil uygulama ve intranet portalı.",
    features: [
      "Next.js ile geliştirilmiş platform",
      "Şirket içi haber ve duyuru sistemi",
      "Eğitim ve gelişim modülü",
      "Anlık bildirim sistemi",
      "Özel gün kutlamaları",
      "İş kazası önleme desteği",
      "Konum paylaşımı",
    ],
    images: [
      require("../assets/images/project/mobilyaka/desktop-1.webp"),
      require("../assets/images/project/mobilyaka/desktop-2.webp"),
      require("../assets/images/project/mobilyaka/desktop-3.webp"),
      require("../assets/images/project/mobilyaka/desktop-4.webp"),
      require("../assets/images/project/mobilyaka/desktop-5.webp"),
      require("../assets/images/project/mobilyaka/desktop-6.webp"),
    ],
  },
  {
    title: "Heyvet",
    image: require("../assets/images/project/heyvet/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "heyvet",
      },
    },
    summary:
      "React Native ile geliştirilen HeyVet, veterinerler ve hayvan sahiplerini buluşturan bir mobil platform.",
    features: [
      "React Native implementasyonu",
      "Veteriner arama sistemi",
      "Anlık mesajlaşma",
      "Randevu sistemi",
      "Canlı destek",
    ],
    images: [
      require("../assets/images/project/heyvet/image-1.png"),
      require("../assets/images/project/heyvet/image-2.png"),
      require("../assets/images/project/heyvet/image-3.png"),
      require("../assets/images/project/heyvet/image-4.png"),
      require("../assets/images/project/heyvet/image-5.png"),
      require("../assets/images/project/heyvet/image-6.png"),
    ],
  },
  {
    title: "Emlak Konut",
    image: require("../assets/images/project/emlak-konut/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "emlak-konut",
      },
    },
    summary:
      "Emlak Konut GYO için React Native ile geliştirilen, gayrimenkul ihalelerine anlık teklif verme imkanı sunan mobil uygulama.",
    features: [
      "React Native implementasyonu",
      "Anlık ihale teklif sistemi",
      "Geçmiş teklifleri görüntüleme",
      "İhale takip sistemi",
      "Mobil ödeme entegrasyonu",
    ],
    images: [
      require("../assets/images/project/emlak-konut/image-1.png"),
      require("../assets/images/project/emlak-konut/image-2.png"),
      require("../assets/images/project/emlak-konut/image-3.png"),
      require("../assets/images/project/emlak-konut/image-4.png"),
    ],
  },
  {
    title: "Toki",
    image: require("../assets/images/project/toki/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "toki",
      },
    },
    summary:
      "TOKİ için Next.js ile geliştirilen, projeleri ve ihaleleri görüntüleme platformu.",
    features: [
      "Next.js implementasyonu",
      "Proje görüntüleme sistemi",
      "İhale takip sistemi",
      "Çalışan bilgi portalı",
      "Performans optimizasyonu",
    ],
    images: [
      require("../assets/images/project/toki/desktop-1.webp"),
      require("../assets/images/project/toki/desktop-2.webp"),
      require("../assets/images/project/toki/desktop-3.webp"),
    ],
  },
  {
    title: "Halk Yatırım",
    image: require("../assets/images/project/halk-yatirim/cover.png"),
    href: {
      pathname: "/project/[slug]",
      params: {
        slug: "halk-yatirim",
      },
    },
    summary:
      "Halk Yatırım için Next.js ile geliştirilen modern landing sayfası.",
    features: [
      "Next.js implementasyonu",
      "Responsive tasarım",
      "Animasyon entegrasyonu",
      "SEO optimizasyonu",
      "Yüksek performans",
    ],
    images: [
      require("../assets/images/project/halk-yatirim/desktop-1.webp"),
      require("../assets/images/project/halk-yatirim/mobile-1.png"),
      require("../assets/images/project/halk-yatirim/mobile-2.png"),
      require("../assets/images/project/halk-yatirim/mobile-3.png"),
      require("../assets/images/project/halk-yatirim/desktop-2.webp"),
      require("../assets/images/project/halk-yatirim/desktop-3.webp"),
    ],
  },
];
