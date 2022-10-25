import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/bookSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>{dispatch(filterCategory(category))}}
            className={selectedCategory === category? "buttonsGenre selected" : "buttonsGenre"}>{category}</button>
        </div>
    )
}

export default Filter;