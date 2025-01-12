import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Projects } from "@/constants/Projects";
import { ProjectList } from "@/components/ProjectList";
import { Fragment } from "react";
import Head from "expo-router/head";
import { AboutMeSection, TitleSection } from "./index";
import { useTranslation } from "react-i18next";
import { GithubRepositoryList } from "@/components/GithubRepositoryList";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>Sinan Öztürk - {t("portfolio")}</title>
        <meta name="og:title" content={`Sinan Öztürk - ${t("portfolio")}`} />
        <meta name="og:description" content={t("bio")} />
        <meta
          name="og:image"
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
