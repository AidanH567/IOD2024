function Cat({ id, name, latinName, image }) {
  return (
    <li>
      <h3>{name}</h3> <span>({latinName})</span>
      <div>ID: {id}</div>
      <img src={image} alt={`${name}`} style={{ width: '150px', height: '150px' }} />
    </li>
  );
}

export default function BigCats() {
  const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/440px-Cat_November_2010-1a.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Felis_silvestris_silvestris_Luc_Viatour.jpg/340px-Felis_silvestris_silvestris_Luc_Viatour.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/PSM_V37_D105_English_tabby_cat.jpg/440px-PSM_V37_D105_English_tabby_cat.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Katzepasstauf_%282009_photo%3B_cropped_2022%29_%28cropped%29.jpg/440px-Katzepasstauf_%282009_photo%3B_cropped_2022%29_%28cropped%29.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/DSH_blotched_transparent_%28cropped%29.png/440px-DSH_blotched_transparent_%28cropped%29.png' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Abyssin.jpg/440px-Abyssin.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Cat%2C_Standard_Orange_Tabby.jpg/504px-Cat%2C_Standard_Orange_Tabby.jpg' },
  ];

  return (
    <>
      <ul>
        <h1>Cat List</h1>
        {cats.map((cat) => (
          <Cat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
          />
        ))}
      </ul>
    </>
  );
}
