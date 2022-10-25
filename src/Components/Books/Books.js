import dataBook from "../../Data/dataBook";
import Book from "./Book";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/bookSlice";

const Books = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className="displayBooks">
            {dataBook
            .filter(book => {
                if (selectedCategory === "ЛЮБЫЕ ЖАНРЫ") return true;
                return selectedCategory === book.category;
            })
            .map((book, index) => 
            <div key={index}>
                <Book book={book} />
            </div>)}
        </div>
    )
}

export default Books;