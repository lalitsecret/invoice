export function _between(a,column,val1,val2)
{
	return a.filter(item=>+item[column]>= val1 && +item[column]<=val2)
}

export function _gt(a,column,val)
{
	return a.filter(item=>+item[column]> val)
}
export function _gte(a,column,val)
{
	return a.filter(item=>+item[column]>=val)
}

export function _lt(a,column,val)
{
	return a.filter(item=>+item[column]< val)
}


export function _lte(a,column,val)
{
	return a.filter(item=>+item[column]<= val)
}
export function _eq(a,column,val)
{
	return a.filter(item=>+item[column]===val)
}

export function _neq(a,column,val)
{
	return a.filter(item=>+item[column]!==val)
}

export function _range(a,filter)
{
	let b=filter.values.split(",")
	let col=filter.column
	return a.filter(item_a=>b.some(item_b=>item_b===item_a[col]))
}



//logical stuff

export function decide(a,filter)
{
	if(filter.status)
	{
		switch(filter.type)
		{
			case "gt": 
				return _gt(a,filter.column,filter.val1); 
			break;
			case "lt": 
				return _lt(a,filter.column,filter.val1); 
			break;
			case "lte": 
				return _lte(a,filter.column,filter.val1); 
			break;
			case "gte": 
				return _gte(a,filter.column,filter.val1); 
			break;
			case "eq": 
				return _eq(a,filter.column,filter.val1); 
			break;
			case "neq": 
				return _neq(a,filter.column,filter.val1); 
			break;
			case "between": 
				return _between(a,filter.column,filter.val1,filter.val2); 
			break;
			default:
				 return a;
			
		}
	}
	else
	{
		return a
	}
}



