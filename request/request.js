export const httpFunc = (options) => {
	return new Promise((resolve,reject) => {
		//console.log(options);
		let { url,data = {},type,methods } = options;
		//console.log(url,data,type,methods );
		if(url == ""){
			reject({
				code:401,
				msg:"请求地址不能为空"
			})
		}
		uni.request({
			url:url,
			data:data,
			method:methods || "POST",
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
			complete: () => {
				//console.log('httpFunc结束了');
			}
		})
		
		
	})
}