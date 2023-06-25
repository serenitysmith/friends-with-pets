import Friend from "../Friend/friend";

const FriendsL = (props) => {
  const mappedFriends = props.data.map((item, key) => (
    <Friend 
    name={item.name} 
    age={item.age}
     pets={item.pets}
      key={key}
    

    
    />
  ));

return (
  <div className="friends-list-container" >{mappedFriends}</div>
)

};
export default FriendsL

// import Friend from "../Friend/friend";

// export default function FriendsL(props) {
//   return(
//     props.data.map((val, idx) =>{
//       return <Friend key={idx} {...val}></Friend>
//     })
//   )

// <div>
// <h2>Friends List</h2>
// friends.map( item => (
//   <Friend
//     key={item.index}
//     name={props.name}
//     age={props.age}
//     pets={props.pets}
//   />
// ))}
// </div>
// export const friends = [
//   {
//     name: "Ben",
//     age: 29,
//     pets: [
//       {
//         name: "spot",
//         breed: "tabby"
//       },{
//         name: "John Johnson",
//         breed: "husky"
//       },{
//         name: "Bear the bear",
//         breed: "Grizzly"
//       }
//     ]
//   },{
//     name: "Bob",
//     age: 31,
//     pets: [
//       {
//         name: "Sally",
//         breed: "Australian Shepard"
//       }
//     ]
//   },{
//     name: "Marcus",
//     age: 25,
//     pets: [
//       {
//         name: "Indy",
//         breed: "Akita"
//       },{
//         name: "Anna",
//         breed: "persian cat"
//       }
//     ]
//   },{
//     name: "Jacob",
//     age: 20,
//     pets: [
//       {
//         name: "fluffy",
//         breed: "sphynx cat"
//       },{
//         name: "patches",
//         breed: "sphynx cat"
//       },{
//         name: "tiger",
//         breed: "sphynx cat"
//       },{
//         name: "oscar",
//         breed: "sphynx cat"
//       }
//     ]
//   }
// ];
