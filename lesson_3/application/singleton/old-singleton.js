/*
	IIFE - Immediately Invoked Function Expression
	( function(){

	})();
*/


const OldSingleton = ( function(){
	var _data = [];

	function add(item){
		_data.push(item);
	}

	function showData(){
		return [..._data];
	}

	function get(id){
		return _data.find((d) => {
			return d.id === id;
		});
	}

	return {
		add: add,
		get: get,
		showData: showData
	};
})();

export default OldSingleton;
