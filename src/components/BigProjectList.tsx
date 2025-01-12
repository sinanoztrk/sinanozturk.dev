import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { getLocalizedValue } from "@/localization/i18n";
import { Text } from "react-native";
import * as AC from "@bacons/apple-colors";
import { Projects } from "@/constants/Projects";

export const BigProjectList = () => {
  const { t } = useTranslation();

  return (
    <Form.Section title={t("myProjects")}>
      {Projects?.map((item, index) => (
        <Form.Link href={item.href} key={index}>
          <View style={{ flex: 1, gap: 10, paddingVertical: 10 }}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Form.Text style={Form.FormFont.default}>{item?.title}</Form.Text>
              {item?.hint && (
                <View
                  style={{
                    backgroundColor: item?.hint?.backgroundColor,
                    padding: 4,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: AC.lightText,
                      fontSize: 10,
                    }}
                  >
                    {getLocalizedValue(item?.hint?.text)}
                  </Text>
                </View>
              )}
            </View>
            <Image
              source={item?.image}
              contentFit="cover"
              style={{
                aspectRatio: 1,
                height: 300,
                borderRadius: 10,
                marginRight: 16,
              }}
            />

            <Form.Text style={Form.FormFont.caption} numberOfLines={1}>
              {getLocalizedValue(item?.summary)}
            </Form.Text>
          </View>
        </Form.Link>
      ))}
    </Form.Section>
  );
};
