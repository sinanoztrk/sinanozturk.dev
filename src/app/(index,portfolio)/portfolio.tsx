import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Projects } from "@/constants/Projects";
import { ProjectList } from "@/components/ProjectList";
import { Fragment } from "react";
import Head from "expo-router/head";
import { AboutMeSection, TitleSection } from "./index";
import { useTranslation } from "react-i18next";
import { GithubRepositoryList } from "@/components/GithubRepositoryList";
import { BigProjectList } from "@/components/BigProjectList";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>Sinan Öztürk - {t("portfolio")}</title>
        <meta name="description" content="Sinan Öztürk - Portfolyo" />
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
