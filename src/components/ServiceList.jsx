import { useSelector, useDispatch } from 'react-redux';
import { removeService, setEditServiceField, changeServiceField, filterService } from '../actions/actionCreators';

export default function ServiceList() {
  const { filteredItems } = useSelector(state => state.serviceList);
  const { isEdit } = useSelector(state => state.serviceAdd); 
  const { filter } = useSelector(state => state.serviceFilter);   
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(filterService(filter));
  }

  const handleEdit = (name, price, id) => {
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
    dispatch(setEditServiceField(id));
  }
  
  return (
    <ul className="list-group ">
      {filteredItems && filteredItems.map(o => (
        <li key={o.id} className="list-group-item d-flex justify-content-between m-1">
          <div className="align-self-center">{o.name} {o.price}</div>  
          <div>
            <button className="material-icons p-1 mx-1" onClick={() => handleEdit(o.name, o.price, o.id)}>edit</button>
            {!isEdit && <button className="material-icons p-1 mx-1" onClick={() => handleRemove(o.id)}>close</button>}
          </div>          
        </li>
      ))}
    </ul>
  )
}
