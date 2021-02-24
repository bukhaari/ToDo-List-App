import React, {useState} from 'react';

// By usnig a class
// class Mycar extends React.Component {
//     constructor(props){
//         super();
//         this.state = {
//             brand: 'Ford',
//             model: 'Mustang',
//             color: 'Red',
//             year: 1964,
//         }
//     };

//     render(){
//         return (
//             <div>
//             <p>My car is {this.state.brand} {this.state.model} {this.state.year} and it's  {this.state.color}</p>
//             </div>
//         )
//     }
// }
// export default Mycar;
 
// by using function and useState
function Mycar(){
    const [mycar, setMycar] = useState({
        brand: 'Ford',
        model:'Mustang',
        color:'Red',
        year:'1964',
    });

    return(
    <p>{mycar.brand} {mycar.model} {mycar.year} and it's {mycar.color}</p>
    )
}

export default Mycar;