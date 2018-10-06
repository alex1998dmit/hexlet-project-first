install:
	npm install
publish:
	npm publish
lint:
	npx eslint ./
start-prog:
	npm run build
	chmod 777 dist/bin/brain-progression.js
	dist/bin/brain-progression.js
start-calc:
	npm run build
	chmod 777 dist/bin/brain-calc.js
	dist/bin/brain-calc.js
start-even:
	npm run build
	chmod 777 dist/bin/brain-even.js
	dist/bin/brain-even.js		
start-gcd:
	npm run build
	chmod 777 dist/bin/brain-gcd.js
	dist/bin/brain-gcd.js	
start-prime:
	npm run build
	chmod 777 dist/bin/brain-prime.js
	dist/bin/brain-prime.js			