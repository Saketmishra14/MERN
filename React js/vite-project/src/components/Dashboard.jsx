import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const navigate=useNavigate();
    function handleClick(){
        navigate("/");
    }

    return <div>
        <h1>Dashboard Page</h1>
        <button onClick={handleClick}>Move to Home Page</button>
    </div>;
}
export default Dashboard;