import { View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { PortfolioItems } from "@/constants/Portfolio";
import { useGlobalSearchParams } from "expo-router";
import { PortfolioList } from "@/components/PortfolioList";

export default function PortfolioItem() {
  const { slug } = useGlobalSearchParams<{ slug: string }>();
  const project = PortfolioItems.find(
    (item) => (item.href as any)?.params?.slug === slug
  );

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        maxWidth: 650,
        marginHorizontal: "auto",
      }}
    >
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
              {project?.summary}
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
              <Form.Text>{feature}</Form.Text>
            </View>
          ))}
        </Form.Section>

        {project?.images && project?.images?.length > 0 && (
          <Form.Section title="Resimler">
            {project?.images?.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={{ aspectRatio: 1, width: "100%" }}
              />
            ))}
          </Form.Section>
        )}

        <PortfolioList
          title="Diğer Projeler"
          data={PortfolioItems?.filter(
            (item) => (item?.href as any)?.params?.slug !== slug
          )}
        />
      </Form.List>
    </View>
  );
}
