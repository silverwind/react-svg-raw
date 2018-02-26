lint:
	eslint --color --quiet *.js

test:
	$(MAKE) lint

publish:
	git push -u --tags origin master
	npm publish

update:
	node_modules/.bin/updates -u
	rm -rf node_modules
	yarn --no-lockfile

npm-patch:
	npm version patch

npm-minor:
	npm version minor

npm-major:
	npm version major

patch: test npm-patch publish
minor: test npm-minor publish
major: test npm-major publish

.PHONY: test update patch minor major npm-patch npm-minor npm-major
