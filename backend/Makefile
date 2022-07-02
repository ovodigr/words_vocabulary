create:
	docker build -t words_img . 
run:
	docker run -d -p 8080:8080 --rm --name words_container words_img
stop:
	docker stop words_container
