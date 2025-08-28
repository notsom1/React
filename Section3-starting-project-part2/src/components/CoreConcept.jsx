export default function CoreConcept({ image, title, description, ...props }) {
  return (
    <li {...props}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
