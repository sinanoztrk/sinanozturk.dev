import React from "react";
import * as Form from "@/components/ui/Form";
import { View } from "react-native";
import { useGithubRepositoriesQuery } from "@/api/Github/GithubRepository.hook";

export const GithubRepositoriesView = () => {
  const { data: repositories } = useGithubRepositoriesQuery();

  if (!repositories || repositories?.length === 0) return null;

  return (
    <Form.Section title={"Github Repositories"}>
      {repositories?.map((item, index) => (
        <Form.Link href={item.html_url as any} key={index} target="_blank">
          <View style={{ flex: 1 }}>
            <Form.Text style={Form.FormFont.default}>{item?.name}</Form.Text>
            <Form.Text style={Form.FormFont.caption} numberOfLines={1}>
              {item?.language}
            </Form.Text>
          </View>
        </Form.Link>
      ))}
    </Form.Section>
  );
};
