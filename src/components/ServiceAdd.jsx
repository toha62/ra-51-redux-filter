import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, resetServiceField, resetEditServiceField, addService, updateService, filterService} from '../actions/actionCreators';

export default function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const { filter } = useSelector(state => state.serviceFilter);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleCancel = () => {		
		dispatch(resetEditServiceField());
		dispatch(resetServiceField());
	}
	
	const handleSubmit = evt => {
			evt.preventDefault();
			item.isEdit ? dispatch(updateService(item.editId, item.name, item.price)) : dispatch(addService(item.name, item.price));
			dispatch(resetServiceField());
			dispatch(filterService(filter));		
	}

	return (
		<form onSubmit={handleSubmit}>			
			<div className="form-group row mb-0 ml-1">
				<label className="col-4 col-form-label" htmlFor="name"><b>Наименование работы</b></label>
				<label className="col-4 col-form-label" htmlFor="price"><b>Стоимость работы</b></label>							
			</div>
			<div className="form-group row">
				<div className="col-4">
					<input className="form-control" id="name" name='name' onChange={handleChange} value={item.name} />
				</div>	
				<div className="col-4">
					<input className="form-control" id="price" name='price' onChange={handleChange} value={item.price} />
				</div>
				<button className="btn btn-secondary" type='submit'>Save</button>				
				{item.isEdit && <button className="btn btn-secondary ml-3" type='button' onClick={handleCancel}>Cancel</button>}
			</div>			
		</form>
	);
}
