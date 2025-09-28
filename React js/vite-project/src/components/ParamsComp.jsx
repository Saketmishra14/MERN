import { useParams } from "react-router-dom";

const ParamsComp=()=>{
    const {id}=useParams();
    return <h2>params:{id}</h2>
}
export default ParamsComp;