import { View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { useGlobalSearchParams } from "expo-router";
import { Projects } from "@/constants/projects";

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
  const { slug } = useGlobalSearchParams<{ slug: string }>();
  const project = Projects.find(
    (item) => (item.href as any)?.params?.slug === slug
  );

  return (
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
            {project?.summary?.tr}
          </Form.Text>
        </View>
      </Form.Section>

      {project?.links && project?.links?.length > 0 && (
        <Form.Section title="Bağlantılar">
          {project?.links?.map((link, index) => (
            <Form.Link
              systemImage={link?.systemImage}
              key={index}
              href={link.href}
              target="_blank"
            >
              {link.title}
            </Form.Link>
          ))}
        </Form.Section>
      )}

      <Form.Section title="Özellikler">
        {project?.features?.map((feature, index) => (
          <View key={index}>
            <Form.Text>{feature?.tr}</Form.Text>
          </View>
        ))}
      </Form.Section>

      {process.env.EXPO_OS == "web" &&
        project?.images &&
        project?.images?.length > 0 && (
          <Form.Section title="Resimler">
            {project?.images?.map((image, index) => (
              <img style={{ width: "100%" }} key={index} src={image} />
            ))}
          </Form.Section>
        )}
    </Form.List>
  );
}
