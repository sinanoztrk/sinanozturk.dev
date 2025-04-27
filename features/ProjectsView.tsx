import { View } from "react-native";
import * as Form from "@/components/ui/Form";
import { Image } from "expo-image";
import { Text } from "react-native";
import * as AC from "@bacons/apple-colors";
import { Projects } from "@/constants/projects";

export const ProjectsView = () => {
  return (
    <Form.Section title={"Tecrübelerim"}>
      {Projects?.map((item, index) => (
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
