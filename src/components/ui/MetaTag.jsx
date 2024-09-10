import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaTag = (props) => {
  const url = props.url || 'bbang-radise.netlify.app';

  return (
    <Helmet>
      <title>{props.title ? `빵라다이스 - ${props.title}` : '빵라다이스~🥐베이킹 커뮤니티~'}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:site_name" content="빵라다이스" />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.imgSrc} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

MetaTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  url: PropTypes.string,
};

MetaTag.defaultProps = {
  title: '',
  description: '베이킹을 사랑하는 사람들이 모인 커뮤니티',
  imgSrc: '/favicon.svg',
  url: 'bbang-radise.netlify.app',
};

export default MetaTag;
