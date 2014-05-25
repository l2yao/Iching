Iching
======

IChing, BaZi, FengShui, Divine, Lunar Calendar

To build locally:
	install node.js
	install yeoman
	install grunt
	install compass
	use grunt server to build app locally

To deploy to heroku:
	grunt deploy
	git subtree push --prefix dist heroku master

To deploy to github:
	grunt deploy
	git subtree push --prefix dist origin gh-pages

a live demo is on heroku:
	http://ichingapp.herokuapp.com/