import Pet from "../Pet/pets";

const Friend = (props) => {
  const mappedPets = props.pets.map((pet, key) => (
    <Pet name={pet.name} breed={pet.breed} key={key} />
  ));
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <h3>Pets:</h3>
      <ul>{mappedPets}</ul>
    </div>
  );
};

export default Friend;

// import Pet from "../Pet/pets";

// export default function Friend(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>Age:{props.age}</p>
//       <h4>Pets:</h4>
//       {props.pets.map((index) => (
//         <Pet key={index} name={props.pets.name} breed={props.pets.breed} />
//       ))}
//     </div>
//   );
// }
