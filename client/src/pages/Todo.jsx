import ParagraphAndTitle from "../components/ParagraphAndTitle";
import List from "../components/List";
import ListItemUnordered from "../components/ListItemUnordered";
import TextContent from "../components/TextContent";
import Image from "../components/Image";

export default function Todo() {
  return (
    <>
      <h1>// Axios</h1>

      <TextContent>
        <ParagraphAndTitle
          title="What can axios do for me?"
          content="Axios is a prominent JavaScript library designed to facilitate HTTP requests and handle responses. While Axios itself is not inherently linked to Express.js, it can be efficiently integrated with any backend framework, including Express.js, to facilitate seamless data exchange between client and server."
        />
        <h6>What Makes Axios Great?</h6>
        <List>
          <ListItemUnordered listItems="Uses promises by default, simplifying asynchronous operations." />
          <ListItemUnordered listItems="Can intercept request and response." />
          <ListItemUnordered listItems="Handles requests and responses in JSON format, streamlining data processing." />
          <ListItemUnordered listItems="Provides protection against XSRF (cross-site request forgery)." />
        </List>
        <Image />
      </TextContent>
    </>
  );
}
