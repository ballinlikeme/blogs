import Title from "../SinglePostContent/Title/Title";

const Preview = ({title, content}) => {
    return (
        <>
            <Title>{title}</Title>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </>
    )
}

export default Preview;