import { Fragment } from "react";
import Head from "expo-router/head";
import { usePathname } from "expo-router";

export default function SeoProvider(props: { children: React.ReactNode }) {
  const pathname = usePathname();

  const seoMetadata = {
    "/": {
      title: "Sinan Öztürk - Software Engineer",
      description:
        "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum.",
      image: "https://sinanozturk.dev/images/avatar.png",
    },
    "/portfolio": {
      title: "Sinan Öztürk - Portfolyo",
      description:
        "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum.",
      image: "https://sinanozturk.dev/images/avatar.png",
    },
    "/project/[slug]": {
      title: "Sinan Öztürk - Portfolyo",
      description:
        "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum.",
      image: "https://sinanozturk.dev/images/avatar.png",
    },
  };

  return (
    <Fragment>
      <Head>
        <title>
          {seoMetadata?.[pathname as keyof typeof seoMetadata]?.title}
        </title>
        <meta
          name="description"
          property="og:description"
          content={
            seoMetadata?.[pathname as keyof typeof seoMetadata]?.description
          }
        />
        <meta
          property="og:image"
          content={seoMetadata?.[pathname as keyof typeof seoMetadata]?.image}
        />
      </Head>
      {props.children}
    </Fragment>
  );
}
