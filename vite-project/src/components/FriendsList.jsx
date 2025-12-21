import FriendListItem from "./FriendListItem"
export default function FriendsList ({friends}) {
 return (
    <ul className="friend-list">
        {friends.map((one) => {
          return  <FriendListItem avatar = {one.avatar} name = {one.name} isOnline = {one.isOnline} id = {one.id}/>
        })}
    </ul>
 )
}