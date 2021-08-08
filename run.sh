docker build . -t stephen_landing_page
docker run -d -p 3000:80 stephen_landing_page