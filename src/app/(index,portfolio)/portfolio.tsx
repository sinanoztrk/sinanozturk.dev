import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Projects } from "@/constants/Projects";
import { ProjectList } from "@/components/ProjectList";
import { Fragment } from "react";
import Head from "expo-router/head";
import { AboutMeSection, TitleSection } from "./index";
import { GithubRepositoryList } from "@/components/GithubRepositoryList";

export default function Portfolio() {
  return (
    <Fragment>
      <Head>
        <title>Sinan Öztürk - Portfolyo</title>
        <meta
          name="description"
          property="og:description"
          content="İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve web frontend geliştirme konusunda uzmanım. Boş zamanlarımda backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen gösteriyorum."
        />
        <meta
          name="image"
          property="og:image"
          content="https://sinanozturk.dev/images/avatar.png"
        />
      </Head>

      <Form.List>
        <TitleSection />
        <AboutMeSection />
        <ProjectList data={Projects} />
        <GithubRepositoryList />
      </Form.List>
    </Fragment>
  );
}
