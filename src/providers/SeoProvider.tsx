import { Fragment } from "react";
import Head from "expo-router/head";
import { usePathname } from "expo-router";
import { Projects } from "@/constants/Projects";

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

  const renderSEOMetadata = () => {
    if (pathname == "/portfolio") {
      return (
        <Head>
          <title>Sinan Öztürk - Portfolyo</title>
          <meta
            name="description"
            property="og:description"
            content={
              "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum."
            }
          />
          <meta
            property="og:image"
            content="https://sinanozturk.dev/images/avatar.png"
          />
        </Head>
      );
    }

    if (pathname.startsWith("/project/")) {
      const slug = pathname.split("/project/")[1];
      const project = Projects.find(
        (item) => (item.href as any)?.params?.slug === slug
      );

      return (
        <Head>
          <title>{project?.title} - Sinan Öztürk</title>
          <meta
            name="description"
            property="og:description"
            content={project?.summary?.tr}
          />
          <meta
            property="og:image"
            content={`https://sinanozturk.dev/images/${slug}/cover.png`}
          />
        </Head>
      );
    }

    return (
      <Head>
        <title>Sinan Öztürk - Software Engineer</title>
        <meta
          name="description"
          property="og:description"
          content={
            "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum."
          }
        />
        <meta
          property="og:image"
          content="https://sinanozturk.dev/images/avatar.png"
        />
      </Head>
    );
  };

  return (
    <Fragment>
      {renderSEOMetadata()}
      {props.children}
    </Fragment>
  );
}
