import ContentB from "./ContentB";

function ContentA({ theme }) {
    return (
        <div>
            <ContentB theme={theme} />
        </div>
    )
}

export default ContentA