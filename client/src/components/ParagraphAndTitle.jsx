export default function ParagraphAndTitle({ title, content = null }) {
  return (
    <>
      <h6>{title}</h6>
      {content && <p>{content}</p>}
    </>
  );
}
