install:
	npm install
usage:
	npm run babel-node -- src/bin/gendiff.js --help
run:
	npm run babel-node -- src/bin/gendiff.js
test-run:
	npm run babel-node -- src/bin/gendiff.js -f json __tests__/__fixtures__/befor.json __tests__/__fixtures__/after.json
build:
	npm run build
publish:
	npm publish
lint:
	npm run eslint .
watch:
	npm run test -- --watch
test:
	npm test

