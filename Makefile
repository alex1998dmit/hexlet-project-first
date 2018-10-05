install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npx eslint ./
test-prog:
	npm run build
	chmod 777 dist/bin/brain-progression.js
	dist/bin/brain-progression.js
test-calc:
	npm run build
	chmod 777 dist/bin/brain-calc.js
	dist/bin/brain-calc.js
test-even:
	npm run build
	chmod 777 dist/bin/brain-even.js
	dist/bin/brain-even.js		
test-gcd:
	npm run build
	chmod 777 dist/bin/brain-gcd.js
	dist/bin/brain-gcd.js	
test-prime:
	npm run build
	chmod 777 dist/bin/brain-prime.js
	dist/bin/brain-prime.js			