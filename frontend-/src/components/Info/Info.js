import './Info.css';

function Info({title, content}) {
  return (
    <div className="info">
        {title ? <b>{title}: </b> : ''}
        {content}
    </div>
  );
}

export default Info;
