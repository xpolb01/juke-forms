import React, {Component} from 'react';

const NewPlaylist = function (props) {
	const handleChange = props.onChange;
	const onSubmit = props.onSubmit;
	const value = props.value;
return (
<div className="well">
  <form className="form-horizontal" onSubmit={onSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
        	

        	{props.disable 
        		? (<div className="alert alert-warning">Please enter a valid name</div>)
        		: null}
        		
          <input 
          	className="form-control" 
          	type="text"
          	value={value}
          	onChange={handleChange}
          	/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button 
          	type="submit" 
          	className="btn btn-success"
          	disabled={props.disable}
          >Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)} 

export default NewPlaylist;