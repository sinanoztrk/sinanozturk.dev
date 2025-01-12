import * as Form from "@/components/ui/Form";
import { Projects } from "@/constants/Projects";
import { ProjectList } from "@/components/ProjectList";
import { AboutMeSection, TitleSection } from "./index";
import { GithubRepositoryList } from "@/components/GithubRepositoryList";

export default function Portfolio() {
  return (
    <Form.List>
      <TitleSection />
      <AboutMeSection />
      <ProjectList data={Projects} />
      <GithubRepositoryList />
    </Form.List>
  );
}
