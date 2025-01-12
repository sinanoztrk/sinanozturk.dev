import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { PortfolioItems } from "@/constants/Portfolio";
import { PortfolioList } from "@/components/PortfolioList";
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
        <meta name="description" content="Sinan Öztürk - Portfolyo" />
      </Head>
      <View
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 650,
          marginHorizontal: "auto",
        }}
      >
        <Form.List>
          <TitleSection />
          <AboutMeSection />
          <PortfolioList data={PortfolioItems} />
          <GithubRepositoryList />
        </Form.List>
      </View>
    </Fragment>
  );
}
