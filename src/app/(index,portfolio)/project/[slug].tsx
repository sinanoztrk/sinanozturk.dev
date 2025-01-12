import { Dimensions, View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { Projects } from "@/constants/Projects";
import { useGlobalSearchParams } from "expo-router";
import { ProjectList } from "@/components/ProjectList";
import { Fragment } from "react";
import Head from "expo-router/head";
import { getLocalizedValue } from "@/localization/i18n";
import { useTranslation } from "react-i18next";

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return Projects.map((item) => ({
    slug: (item.href as any)?.params?.slug,
  }));
}

export default function PortfolioItem() {
  const { t } = useTranslation();
  const { slug } = useGlobalSearchParams<{ slug: string }>();
  const project = Projects.find(
    (item) => (item.href as any)?.params?.slug === slug
  );

  return (
    <Fragment>
      <Head>
        <title>{project?.title ?? ""} - Sinan Öztürk</title>
        <meta
          name="description"
          content={getLocalizedValue(project?.summary)}
        />
      </Head>

      <Form.List navigationTitle={project?.title}>
        <Form.Section>
          <View style={{ alignItems: "center", gap: 8, padding: 16, flex: 1 }}>
            <Image
              source={project?.image}
              style={{
                aspectRatio: 1,
                width: "100%",
                borderRadius: 8,
                marginBottom: 10,
              }}
            />
            <Form.Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {project?.title}
            </Form.Text>
            <Form.Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: AC.secondaryLabel,
              }}
            >
              {getLocalizedValue(project?.summary)}
            </Form.Text>
          </View>
        </Form.Section>

        {project?.links && project?.links?.length > 0 && (
          <Form.Section title="Bağlantılar">
            {project?.links?.map((link, index) => (
              <Form.Link key={index} href={link.href} target="_blank">
                {link.title}
              </Form.Link>
            ))}
          </Form.Section>
        )}

        <Form.Section title="Özellikler">
          {project?.features?.map((feature, index) => (
            <View key={index}>
              <Form.Text>{getLocalizedValue(feature)}</Form.Text>
            </View>
          ))}
        </Form.Section>

        {process.env.EXPO_OS == "web" &&
          project?.images &&
          project?.images?.length > 0 && (
            <Form.Section title="Resimler">
              {project?.images?.map((image, index) => (
                <img key={index} src={image} />
              ))}
            </Form.Section>
          )}

        <ProjectList
          title={t("otherProjects")}
          data={Projects?.filter(
            (item) => (item?.href as any)?.params?.slug !== slug
          )}
        />
      </Form.List>
    </Fragment>
  );
}
