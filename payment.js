

export function payment() {
    return (


        
        <div >

            <form >
                {/* <h3>SignUp to QuickRecharge</h3><br></br> */}
                <input class="inp" type='text' placeholder="enter paytem mobile no." name="mobno"  required></input>
                <br></br><br></br>
                <input class="inp" type='text' placeholder="enter amount" name="amount" required></input>
                <br></br><br></br>
                {/* <input class="inp" type='password' placeholder="confirm password" name="ConfirmPassword" onChange={this.handleChange} required></input>
                <br></br><br></br> */}
                <input type='submit' value='Payment'></input><br></br><br></br>

               
            </form>

        </div>



    );}