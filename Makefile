install:
	npm ci

publish:
	npm publish --dry-run

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

lint:
	npx eslint .

fix:
	npx eslint . --fix