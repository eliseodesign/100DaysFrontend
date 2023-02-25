import { useNoti } from "../../utils/store/useNoti"
import { Link } from "react-router-dom"

const List = () => {
  const { notifications, setNoti } = useNoti()

  console.log(notifications[0])
  function handleClick(id: number) {
    const notes = notifications.map((noti) => {
      if (noti.id === id) {
        return {
          ...noti,
          opened: true
        }
      }
      return noti
    })

    setNoti(notes)
  }

  return (
    <div className="lists">
      {
        notifications.map((noti, i) => (
          <Link
            onClick={() => handleClick(noti.id)}
            to={"details/" + noti.id}
            key={noti.id}
            className={noti.opened ? "opened" : ""}
          >
            <img src={"../../../public/images/" + noti.img} alt="" />

            <div>
              <p className={noti.opened ? "" : "new"}>
                <b>{noti.user}</b> {noti.message}
              </p>
              <p> {noti.time} </p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default List;