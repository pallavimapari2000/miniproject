// import { Component } from "react"
// import "./signin.css" ;
// import { Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { saveCustomer } from "./CustomerApiServices";

// export class Signin extends Component {
//     constructor(){
//         super();
//         this.state = {
//             name:'',
//             password: '',
//             phone: '',
//             email:'',
//             confirmpassword:''

//         }
//     }
//     handleChange = (event)=>{
//         this.setState({[event.target.name]:event.target.value});
//     }

//     handleSubmit = (event)=>{
//         event.preventDefault();
//         console.log(this.state);
//     }
//     render(){
//        return( 

//     <div className="sign_content">
//        <div className="sign_content2">

//             <form onSubmit={this.handleSubmit}>
//             <h3>SignUp to QuickRecharge</h3><br></br>
//                 <input className="inpp" type='text' placeholder="enter name" name="Name" onChange={this.handleChange}></input>
//                 <br></br><br></br>
//                 <input className="inpp" type='email' placeholder="enter email" name="Email" onChange={this.handleChange}></input>
//                 <br></br><br></br>
//                 <input className="inpp" type='text' placeholder="enter mobile number" name="MobNo" onChange={this.handleChange}></input>
//                 <br></br><br></br>
//                 <input className="inpp" type='password' placeholder="enter password" name="Password" onChange={this.handleChange}></input>
//                 <br></br><br></br>
//                 <input className="inpp" type='password' placeholder="confirm password" name="confirmpassword" onChange={this.handleChange}></input>
//                 <br></br><br></br>

//                 <LinkContainer to={"/Login"} className="btntwo">
//                                         <Nav.Link> <input type='submit' value='Register'></input> </Nav.Link>
//                                     </LinkContainer>
//                 {/* <input type='submit' value='Register'></input> */}
//             </form>

//         </div>
//         </div>


//        );

// ------------------------------------------------------------------------------------------
import { Component } from "react"
import "./signin.css";
import { saveCustomer } from "./CustomerApiServices";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';





export class Signin extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Email: '',
            MobNo: '',
            Password: '',
            ConfirmPassword: ''

        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }




    handleSubmit = async (event) => {
        event.preventDefault();  //page cannot be reload
        const response = await saveCustomer(this.state);
        console.log(response);

    }



    render() {
        return (

            <div className="sign_content">
                <div className="sign_content2">

                    <form onSubmit={this.handleSubmit}>
                        <h3>SignUp to QuickRecharge</h3><br></br>
                        <input class="inp" type='text' placeholder="enter name" name="Name" onChange={this.handleChange} required></input>
                        <br></br><br></br>
                        <input class="inp" type='email' placeholder="enter email" name="Email" onChange={this.handleChange} required></input>
                        <br></br><br></br>
                        <input class="inp" type='text' placeholder="enter mobile number" name="MobNo" onChange={this.handleChange} required></input>
                        <br></br><br></br>
                        <input class="inp" type='password' placeholder="enter password" name="Password" onChange={this.handleChange} required></input>
                        <br></br><br></br>
                        <input class="inp" type='password' placeholder="confirm password" name="ConfirmPassword" onChange={this.handleChange} required></input>
                        <br></br><br></br>
                        <input type='submit' value='Click here to Register'></input><br></br><br></br>

                        <LinkContainer to={"/Login"} className="btntwo">
                            <Nav.Link> <input type='submit' value='Proceed to LOGIN'></input> </Nav.Link>
                        </LinkContainer>

                        {/* <LinkContainer to={'/Login'}>
                            <Nav.Link>signin</Nav.Link>
                        </LinkContainer> */}

                    </form>

                </div>
            </div>


        );
    }
}