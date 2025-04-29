
export default function Publication({name, authorlist, venue, paper, arxiv}) {
    return (
        <div style={{
            // background: "#fafafa",
            padding: "10px",
            marginTop: "10px",
        }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <h4>{name}</h4>
                <div>
                    <a
                        href={paper}
                        style={{
                            color: "blue",
                            margin: "5px"
                        }}
                        >Paper</a>
                    <a
                        href={arxiv}
                        style={{
                            color: "brown",
                            margin: "5px"
                        }}
                    >Arxiv</a>
                </div>
            </div>
            <div>
                <p>{authorlist}</p>
                <p>{venue}</p>
            </div>
        </div>
    )
}