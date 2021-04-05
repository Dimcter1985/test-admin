const PostPanel = ({ record }) => (
  <div dangerouslySetInnerHTML={{ __html: record.body }} />
);
export default PostPanel