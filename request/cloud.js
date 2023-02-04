export const cloudFunc = (options) => {
	return new Promise((resolve,reject) => {
		let { name , data } = options;
		uniCloud.callFunction({
			name:name,
			data:data,
			success: (res) => {
				if(res.result.code == 200){
					resolve(res.result);
				}
			},
			fail: (err) => {
				console.log('failcloud',err);
				reject(err)
			}
		})
	})
}