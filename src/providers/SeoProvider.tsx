import { Fragment } from "react";
import Head from "expo-router/head";
import { usePathname } from "expo-router";
import { Projects } from "@/constants/Projects";

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: "website" | "article";
}

export default function SeoProvider(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const baseUrl = "https://sinanozturk.dev";

  const generateMetaTags = ({
    title,
    description,
    image,
    url,
    type = "website",
  }: MetaTagsProps) => {
    return (
      <>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sinanozturk.dev" />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </>
    );
  };

  const renderSEOMetadata = () => {
    if (pathname == "/portfolio") {
      const description =
        "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum.";
      const title = "Sinan Öztürk - Portfolyo";
      const image = `${baseUrl}/images/avatar.png`;

      return (
        <Head>
          {generateMetaTags({
            title,
            description,
            image,
            url: `${baseUrl}/portfolio`,
          })}
        </Head>
      );
    }

    if (pathname.startsWith("/project/")) {
      const slug = pathname.split("/project/")[1];
      const project = Projects.find(
        (item) => (item.href as any)?.params?.slug === slug
      );
      const title = `${project?.title} - Sinan Öztürk`;
      const description = project?.summary?.tr!;
      const image = `${baseUrl}/images/${slug}/cover.png`;

      return (
        <Head>
          {generateMetaTags({
            title,
            description,
            image,
            url: `${baseUrl}/project/${slug}`,
            type: "article",
          })}
        </Head>
      );
    }

    const description =
      "İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum.";
    const title = "Sinan Öztürk - Software Engineer";
    const image = `${baseUrl}/images/avatar.png`;

    return (
      <Head>
        {generateMetaTags({
          title,
          description,
          image,
          url: baseUrl,
        })}
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
