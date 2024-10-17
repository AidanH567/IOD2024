export function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>
      <div className="Comment-date">
        {" "}
        {/* the comment date is another aspect */}
        {props.date.toLocaleString()}
      </div>
    </div>
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx

// simpler Comment component with the user info section extracted out into its own component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <img
        className="Avatar h-24 w-24 rounded-full object-cover"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

export function Comment(props) {
  return (
    // Move the return statement inside the function body
    <div className="Comment componentBox">
      <UserInfo author={props.author} />{" "}
      {/* Corrected prop name to match UserInfo's expected input */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleString()}</div>
    </div>
  );
}
