import * as Form from "@/components/ui/Form";

export const LinksView = () => {
  return (
    <Form.Section title="Bağlantılar">
      <Form.Link href="https://github.com/sinanoztrk" target="_blank">
        github
      </Form.Link>
      <Form.Link
        href="https://www.linkedin.com/in/sinanozturkk/"
        target="_blank"
      >
        linkedin
      </Form.Link>
      <Form.Link href="https://x.com/snanoztrk" target="_blank">
        x
      </Form.Link>
    </Form.Section>
  );
};
