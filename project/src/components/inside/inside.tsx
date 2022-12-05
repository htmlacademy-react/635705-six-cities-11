type InsideProps = {
  goods: string[];
}

function Inside({ goods }: InsideProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good) => (
          <li key={good.replace(/\s/g, '')} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inside;
