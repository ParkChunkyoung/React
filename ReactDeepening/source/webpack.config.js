const path = require('path');

module.exports = {
  entry: './context/jsx/app.jsx',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
   rules:[
	  {
		 test:/\.(js|jsx)$/, // ��� .js,jsx���Ͽ� babel-loader(.babelrc�� ������ ����)�� �����մϴ�.
		 exclude: /node_modules/, // node_moudules ���� ������ ���� �Ѵ�.
		 use:{
			loader:"babel-loader" // babel-loader�� ����Ѵ�.
		 }
	  }
   ]
  }
};