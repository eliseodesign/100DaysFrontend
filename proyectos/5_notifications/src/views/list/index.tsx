import { useNoti } from "../../utils/store/useNoti"

const List = () => {
  const { notifications } = useNoti()

  return ( 
    <>
      <h2>List</h2>
      {
        notifications.map((noti, i)=>(
          <div key={`${ noti.user + noti.message }`}>
            <img src={"../../../public/images/"+i+".webp"} alt="" />
            <h2>{noti.user}</h2>
            <p> {noti.message} </p>
          </div>
        ))
      }
    </> 
  );
}
 
export default List;