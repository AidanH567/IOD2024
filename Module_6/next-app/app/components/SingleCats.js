function SingleCat({ id, name, latinName, image }) {
  return (
    <li>
      <h3>{name}</h3> <span>({latinName})</span>
      <div>ID: {id}</div>
      <img
        src={image}
        alt={`${name} (${latinName})`}
        style={{ width: "150px", height: "150px" }}
      />
    </li>
  );
}

export default SingleCat;
