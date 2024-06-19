import Button1 from "./Login";
import Input1 from "./UserId";

function Form()
{
    return(
      <form className="form">
        <Input1 type="text" placeholder="Username" />
        <Input1 type="password" placeholder="Password" />
        <Button1 type="submit" label='Login'/>
      </form>
    )
}

export default Form; 