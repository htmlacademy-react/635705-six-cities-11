type BookmarkProps = {
  isFavorite: boolean;
}

function Bookmark({ isFavorite }: BookmarkProps): JSX.Element {
  return (
    <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
      <svg className="place-card__bookmark-icon " width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
      </span>
    </button>
  );
}

export default Bookmark;
