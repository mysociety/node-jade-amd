
all: minify


runtime:
	rm     public/js/jadeRuntime.js
	../bin/jade-amd --runtime > public/js/jadeRuntime.js


jade2amd:
	rm -rf public/js/templates
	../bin/jade-amd --from views/ --to public/js/templates/


minify: runtime jade2amd
	rm -rf public-minified
	../node_modules/.bin/r.js -o public/js/app.build.js
	rm    public-minified/build.txt
	rm    public-minified/js/app.build.js


.PHONY: jade2amd runtime minify

