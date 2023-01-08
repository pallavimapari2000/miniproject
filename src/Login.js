// import { Component } from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { Container, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// export class Login extends Component {
//     constructor(){
//         super();
//         this.state = {
//             Password: '',
//              MobNo: '',

//         }
//     }
//     handleChange = (event)=>{
//         this.setState({[event.target.name]:event.target.value});
//     }

//     handleSubmit = (event)=>{
//         event.preventDefault();
//         console.log(this.state);
//     }
// ------------------------
export function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
};

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
};

useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
    }
        
},[formErrors]);

const validate = (values) => {
    const errors = {};

    if (!values.password) {
        errors.password = "password is required";
    }
    return errors;

};
// ----------------------------------------------------------------------------

// render()
return (
    <div>
        <Container fluid className="justify-content-center">
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <Row>
                <div className="log_content p-5 ">
                    <div class="log_content2">
                        <form onSubmit={handleSubmit}>
                            <div class="sec text-align-center">
                                <h3>LogIn to QuickRecharge</h3><br></br>
                                 <input class="inpp" type='text' placeholder="enter mobile number" name="MobNo" value={formValues.mobno} onChange={handleChange}/>
                                    <br></br><br></br>
                                {/* <p>{formErrors.password}</p> */}
                                <input class="inpp" type='password' placeholder="enter password" name="Password" value={formValues.password} onChange={handleChange}/>
                                    <br></br><br></br>

                                    <LinkContainer to={"/Jio"} className="btntwo">
                                        <Nav.Link><input type='submit' value='LOGIN' ></input></Nav.Link>
                                    </LinkContainer>

                                    {/* <input type='submit' value='LOGIN' ></input>  */}
                                </div>
                        </form>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
);
  

}