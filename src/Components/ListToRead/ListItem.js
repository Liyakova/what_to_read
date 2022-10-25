import { removeItemFromList } from "../../redux/listSlice";
import { useDispatch } from "react-redux";

const ListItem = ({listItem}) => {
    const dispatch = useDispatch();

    return(
        <div className="listItem">
            <p className="list">{listItem.bookId.name}</p>
            <button onClick={()=> 
                dispatch(removeItemFromList({listItemId: listItem.id}))} className="delete"> ✘ </button>
        </div>
    )
}

export default ListItem; 