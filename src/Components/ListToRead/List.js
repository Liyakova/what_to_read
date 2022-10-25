import { getListCategory } from "../../redux/listSlice";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const List = () => {
    const listItems = useSelector(getListCategory);

    return(
        <div>
            <h3>Хочу прочитать:</h3>
            {listItems.map( (listItem, index) => (
                <div key={index}>
                    <ListItem listItem={listItem} />
                </div>)
            )}    
        </div>
    )
}

export default List;