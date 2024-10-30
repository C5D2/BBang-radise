import ClassCard from '@components/ui/Card/ClassCard';
import { ClassListContent } from '@styles/class/classList.style';
import PropTypes from 'prop-types';

ClassBookmarkList.propTypes = {
  myClassBookmark: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function ClassBookmarkList({ myClassBookmark }) {
  const classList = myClassBookmark?.item.map((item) => <ClassCard key={item._id} item={item} />);

  return <>{myClassBookmark.item.length > 0 ? <ClassListContent>{classList}</ClassListContent> : <div>아직 북마크한 클래스가 없습니다.</div>}</>;
}

export default ClassBookmarkList;
