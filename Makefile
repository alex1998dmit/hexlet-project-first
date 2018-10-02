install:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
start:
	sudo npx babel-node -- src/bin/brain-games.js
publish:
	sudo npm publish