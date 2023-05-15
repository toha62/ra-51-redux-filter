export default function ServiceFilter() {
  const handleChange = evt => {
		const {name, value} = evt.target;
		// dispatch(changeServiceField(name, value));
	}
  return (
    <form >
      <div className="form-group row mb-0 ml-1">
				<label className="col-4 col-form-label" htmlFor="filter"><b>Фильтр</b></label>						
			</div>
			<div className="form-group row">
				<div className="col-4">
					<input className="form-control" id="filter" name='name' onChange={handleChange} value="" />
				</div>				
			</div>		
    </form>    
  );
}
