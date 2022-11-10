type MarkProps = {
  isPremium: boolean;
  className: string;
}

function Mark({isPremium, className}: MarkProps) {
  return (
    isPremium ?
      <div className={className}>
        <span>Premium</span>
      </div> : <div />
  );
}

export default Mark;
