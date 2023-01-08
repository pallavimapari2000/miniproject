import { Component } from "react";
import "./login.css" ;
import {  Nav } from 'react-bootstrap';
import { saveCustomer } from "./CustomerApiServices";
import { LinkContainer } from 'react-router-bootstrap';

export class Login extends Component {
    constructor(){
        super();
       this.state = {
                MobNo: 'MobNo',
                Password: 'Password'
            }
        }

        handleChange= (event)=>
        {
            this.setState({[event.target.name]:event.target.value})
        }
    
        handleSubmit= async(event)=>
        {
            event.preventDefault();  //page cannot be reload
            const response=await saveCustomer(this.state);
            console.log(response);
        }
        
   

    render(){
       return( <div class="fir">

            <form onSubmit={this.handleSubmit}>
                <div class="sec">
                <h3>LogIn to QuickRecharge</h3><br></br>
                <input  class="inpp"  type='text' placeholder="enter mobile number" name="MobNo" onChange={this.handleChange} required></input>
                <br></br><br></br>
                <input class="inpp" type='password' placeholder="enter password" name="Password" onChange={this.handleChange} required></input>
                <br></br><br></br>

                <LinkContainer to={"/Jio"} className="btntwo">
                 <Nav.Link>LOGIN</Nav.Link>
                </LinkContainer>
                
                {/* <input type='submit' value='LOGIN' ></input>  */}
                </div>
            </form>
        </div>
       );
    }
}