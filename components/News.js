import Notice from './Notice';

const News = (props) => {
    return (
        <div className="row">
            {props.news.map(notice => (
                <Notice 
                    key={notice.url}
                    notice={notice}
                />
            ))}
        </div>
    );
}

export default News;