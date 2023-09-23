import H1 from "../components/H1";
import ParagraphAndTitle from "../components/ParagraphAndTitle";
import TextContent from "../components/TextContent";

export default function Home() {
  return (
    <>
      <H1 title="React // API " />

      <TextContent>
        <ParagraphAndTitle
          title="What's an API?"
          content="An API is an application programming interface which gives 2 or more computer programs the ability to communicate "
        />
      </TextContent>

      <TextContent>
        <ParagraphAndTitle
          title="Purpose of an API"
          content="There are numerous reasons to use or understand an API. A primary purpose is to abstract away the complexity of a particular action that a developer wishes to perform. The developer only needs to be familiar with the function, rather than the underlying details. A fitting analogy is a menu at a restaurant: the patron doesn't need to know which knife was used to prepare their dish. The patron is the developer."
        />
      </TextContent>

      <TextContent>
        <ParagraphAndTitle title="Let's Explore API usecases in a REACT.js enviornment" />
      </TextContent>
    </>
  );
}
