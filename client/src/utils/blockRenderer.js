function blockRenderer(contentBlock) {
    const type = contentBlock.getType()
    if (type === "break") {
        return {
            component: <br />,
            editable: false,
        }
    }
}

export default blockRenderer;