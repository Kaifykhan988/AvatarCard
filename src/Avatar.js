import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

class Avatar extends Component{
       
       constructor(){
           super();
           this.state = {
               name: "Welcome to Avatar Site"
           }
        }
        namechange(){
               this.setState({
                   name : "Congratulations, You have subscribed our services."
               })
        }
       
       render(){
        const AvatarListArray = [
            {
                id:1,
                name: "Alan Jones",
                work: "Frontend Developer"
            },
            {
                id:2,
                name: "James Bond",
                work: "Senior Developer"
            },
            {
                id:3,
                name: "Henry Jurk",
                work: "Application Developer"
            },
            {
                id:4,
                name: "Jules Boutin",
                work: "Java Developer"
            }
        ]
    
            const arrayavatarcard = AvatarListArray.map((avatarcard, i) =>   {
                return <AvatarList key = {i} id={AvatarListArray[i].name}  
                                 name={AvatarListArray[i].name} 
                                 work={AvatarListArray[i].work}/>
            }
    
            )
    
        return (
                <div className="mainpage">
                    <h1> {this.state.name} </h1>
                    {arrayavatarcard}
                    <br/>             
                    <button onClick={ () => this.namechange() }> Subscribe Now </button>
                </div>
            )
    }
}
export default Avatar;