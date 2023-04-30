function getProducts(){
$.get("?tableName=products", function(productTable){
// console.log(productTable);
	$("#prd").empty();
	products= JSON.parse(productTable);
	products.forEach(function(product){

		$("#prd").append("<tr> <td width=200px>" + product.prod_name + "</td> <td width=50px>"+ product.prod_price +"</td> <td width=170px><input type ='number' id="+product.prod_id+"></td> </tr>");
		
	});
	$("#products").append("<div id='cost'></div>")
}); // end $.getn

} // getProducts()

function calculateCost(){
var sum =0;
if(products){
	$("#cost").empty()
	products.forEach(function(product){
		sum = sum + product.prod_price * $("#" + product.prod_id).val();
	});
	sum = sum * 1.08; // 7% tax and 1% processing fee
	$("#cost").append("<div>Cost= $ " + sum.toFixed(2) + " includes 7% tax and 1% processing fee</div>")
}

} //calculateCost()