import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="categories">
            <h1>Что почитать?</h1>
            <div className="allCategories">
            {["ЛЮБОВНЫЕ РОМАНЫ", "ТРИЛЛЕРЫ", "ДЕТЕКТИВЫ", "ФЭНТЕЗИ", "КЛАССИКА", "ПСИХОЛОГИЯ", "ЛЮБЫЕ ЖАНРЫ"].map(
                (category, index) => 
                <div key={index}>
                    <Filter category={category}/>
                </div>
            )}</div>
        </div>
    )
}

export default AllCategories;