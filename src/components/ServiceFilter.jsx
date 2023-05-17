import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField, filterItems } from '../actions/actionCreators';

export default function ServiceFilter() {
	const filter = useSelector(state => state.serviceFilter);
	const dispatch = useDispatch();
	console.log('ServiceFilter', filter);
  const handleChange = evt => {
		const { value } = evt.target;
		dispatch(changeFilterField(value));
		dispatch(filterItems(value));
	}
  return (
    <form >
      <div className="form-group row mb-0 ml-1">
				<label className="col-4 col-form-label" htmlFor="filter"><b>Фильтр</b></label>						
			</div>
			<div className="form-group row">
				<div className="col-4">
					<input className="form-control" id="filter" name='name' onChange={handleChange} value={filter.value} />
				</div>				
			</div>		
    </form>    
  );
}
