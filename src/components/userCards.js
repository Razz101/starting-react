import "../styles/userCard.css"
import UserCard from "./userCard";

function UserCards({ users }) {
  return (
    <div className="userCards">
      {users.map((x, index) => (
        <UserCard user={x} key={index} />
      ))}
    </div>
  );
}

export default UserCards;
