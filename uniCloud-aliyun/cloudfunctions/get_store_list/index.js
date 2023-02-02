'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let res = await db.collection('store').field({
		"name":true,
	}).get()
	let slist = [];
	for (var i = 0; i < res.data.length; i++) {
		let { _id,name } = res.data[i];
		slist.push(name)
	}
	//返回数据给客户端
	return {
		code:200,
		msg:"查询成功",
		data:slist
	}
};
