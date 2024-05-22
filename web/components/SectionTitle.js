export default function SectionTitle({ text }) {
  return (
      <h2 className="text-center typography-7 text-medium-large color-primary margin-bottom-3">{text ?? 'Section Title'} </h2>
  );
}