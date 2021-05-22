{
	var apigClient = apigClientFactory.newClient({
		//apiKey: ''
	});
	var params = {
		// This is where any modeled request parameters should be added.
		// The key is the parameter name, as it is defined in the API in API Gateway.
		//param0: '',
		//param1: ''
	};

	var body = {
		// This is where you define the body of the request,
		"InputText": ttext.value
	};

	var additionalParams = {
		// If there are any unmodeled query parameters or headers that must be
		//   sent with the request, add them here.
		headers: {
			//param0: '',
			//param1: ''
		},
		queryParams: {
			//param0: '',
			//param1: ''
		}
	};

	apigClient.YOURPOSTMETHODHERE(params, body, additionalParams)
		.then(function (result) {
			// Add success callback code here.
			console.log(result);
			var obj = result.data.apiResult;
			document.getElementById("tresult").innerHTML = obj;
		}).catch(function (result) {
			// Add error callback code here.
			console.log(result);
		})
}