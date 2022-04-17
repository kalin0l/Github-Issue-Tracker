



const Reactions = ({heart,comment,eyes,confused,laugh,rocket}) => {
    return   <div className="reactions">
    {heart > 0 && (
      <div>
        <span>
          ❤️
          {heart}
        </span>
      </div>
    )}
    {comment.reactions["+1"] > 0 && (
      <div>
        <span>
          👍
          {comment.reactions["+1"]}
        </span>
      </div>
    )}
    {comment.reactions["-1"] > 0 && (
      <div>
        <span>
          👎
          {comment.reactions["-1"]}
        </span>
      </div>
    )}
    {eyes > 0 && (
      <div>
        <span>
          👀
          {eyes}
        </span>
      </div>
    )}
    {confused > 0 && (
      <div>
        <span>
          confused
          {confused}
        </span>
      </div>
    )}
    {laugh > 0 && (
      <div>
        <span>
          😄
          {laugh}
        </span>
      </div>
    )}
    {rocket > 0 && (
      <div>
        <span>
          🚀
          {rocket}
        </span>
      </div>
    )}
  </div>
}

export default Reactions