

const Pet = (props) => {
  return (
    <li>
      Name: {props.name} <br/>
      Breed: {props.breed}
    </li>
  )
}





export default Pet









// export default function Pet(props) {
//   return (
//     <div>
//       <p>Name:{props.pets.name}</p>
//       <p>Breed: {props.pets.breed}</p>
//     </div>
//   );
// }
