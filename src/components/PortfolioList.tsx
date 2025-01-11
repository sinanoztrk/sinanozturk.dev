import { Href, Link } from "expo-router";
import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { PortfolioItems } from "@/constants/Portfolio";
import { Image } from "expo-image";

export type PortfolioListItem = {
  title: string;
  image: string;
  href: Href;
  summary: string;
  features: string[];
  images: string[];
  links?: {
    title: string;
    href: Href;
  }[];
};

export const PortfolioList = ({
  data,
  title,
}: {
  data: PortfolioListItem[];
  title?: string;
}) => {
  return (
    <Form.Section title={title ?? "Projelerim"}>
      {data?.map((item, index) => (
        <Link href={item.href} key={index}>
          <Image
            source={item?.image}
            style={{
              aspectRatio: 1,
              height: 35,
              borderRadius: 5,
              marginRight: 16,
            }}
          />
          <View style={{ flex: 1 }}>
            <Form.Text style={Form.FormFont.default}>{item?.title}</Form.Text>
            <Form.Text style={Form.FormFont.caption} numberOfLines={1}>
              {item?.summary}
            </Form.Text>
          </View>
        </Link>
      ))}
    </Form.Section>
  );
};
