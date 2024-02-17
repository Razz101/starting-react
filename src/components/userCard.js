import "../styles/userCard.css"

function UserCard({ user }) {
  return (
    <div className="userCard">
      <h3>{user.name}</h3>
      <img
        className="avatar"
        alt="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

export default UserCard;