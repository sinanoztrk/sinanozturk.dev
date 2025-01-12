import { View } from "react-native";
import { fetch } from "expo/fetch";
import { useEffect, useState } from "react";
import * as Form from "@/components/ui/Form";

interface GithubRepositoryListItem {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export const GithubRepositoryList = () => {
  const [repositories, setRepositories] = useState<GithubRepositoryListItem[]>(
    []
  );

  const getRepositories = async () => {
    const response = await fetch(
      "https://api.github.com/users/sinanoztrk/repos"
    );
    const data = await response.json();
    setRepositories(data);
  };

  useEffect(() => {
    getRepositories();
  }, []);

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
