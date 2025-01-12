import { Href } from "expo-router";
import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Image } from "expo-image";
import { Translation } from "@/localization/i18n";
import { Text } from "react-native";
import * as AC from "@bacons/apple-colors";

export type ProjectListItem = {
  title: string;
  image: string;
  href: Href;
  summary: Translation;
  features: Translation[];
  images: string[];
  links?: {
    title: string;
    href: Href;
  }[];
  hint?: {
    backgroundColor: any;
    text: Translation;
  };
};

export const ProjectList = ({
  data,
  title,
}: {
  data: ProjectListItem[];
  title?: string;
}) => {
  return (
    <Form.Section title={title ?? "Projelerim"}>
      {data?.map((item, index) => (
        <Form.Link href={item.href} key={index}>
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
              {item?.summary?.tr}
            </Form.Text>
          </View>

          {item?.hint && (
            <View
              style={{
                backgroundColor: item?.hint?.backgroundColor,
                padding: 4,
                borderRadius: 5,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: AC.lightText,
                  fontSize: 10,
                }}
              >
                {item?.hint?.text?.tr}
              </Text>
            </View>
          )}
        </Form.Link>
      ))}
    </Form.Section>
  );
};
