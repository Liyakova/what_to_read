import { useDispatch } from 'react-redux';
import { addItemToList } from '../../redux/listSlice';

const Book = ({book}) => {
    const dispatch = useDispatch();

    return(
        <div className="bookDiscriptions">
            <img className="bookCover" src={`./pics/${book.photo}.jpeg`} alt="cover"/>
            <h3 className="bookName">{book.name}</h3>
            <h4 className="bookAuthor">{book.author}, {book.year}</h4>
            <button onClick={()=> {dispatch(addItemToList({book}))}} className='wantToRead'>Хочу прочитать</button>

        </div>
    )
}

export default Book;