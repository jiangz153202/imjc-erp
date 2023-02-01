'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	let res = await db.collection('user').get()
	//event为客户端上传的参数
	console.log('event : ', event)
	console.log(res);
	//返回数据给客户端
	return {
		code:200,
		msg:"调用成功",
		data:res
	}
};
