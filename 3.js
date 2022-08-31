
function count_occur( str )
{
// checking string is valid or not
if( str.length == 0 )
{
	console.log("invalid array")
	return;
}
//cor loop to iterate over string
for( let i = 0 ;i < str.length ;i++)
{
	//variable counting occurrence
	let count = 0;
	for( let j = 0 ;j < str.length ;j++)
	{
	if( str[i] == str[j] && i > j )
	{
	break;
	}
	if( str[i] == str[j] )
	{
		count++;
	}
	}
	if( count > 0)
	console.log(`${str[i]} occurs ${count} times`);
	
}

}

// test array
b = ['a','b','c','a','k']
count_occur( b );

