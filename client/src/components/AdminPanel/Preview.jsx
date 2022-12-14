import Title from "../SinglePostContent/Title/Title";
import Description from "../SinglePostContent/Description/Description";
import PanelWrapper from "./PanelWrapper";
import PreviewText from "./PreviewText";

const Preview = ({title, content, description}) => {
    return (
        <PanelWrapper>
            <Title>{title}</Title>
            <Description description={description} />
            <PreviewText text={content} />
        </PanelWrapper>
    )
}

export default Preview;