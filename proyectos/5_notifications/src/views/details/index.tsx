import {useParams} from "react-router-dom"
import { useNoti} from "../../utils/store/useNoti"
const Details = () => {

  const {notifications, setNoti} = useNoti()
  const {id} = useParams()
  const thisNoti = notifications.filter(noti => noti.id === Number(id))[0]

  
  return ( 
  <>
    <h2>{thisNoti.user}</h2>
    <span>{thisNoti.id}</span>
    <p>{thisNoti.message}</p>
  </> 
  );
}
 
export default Details;