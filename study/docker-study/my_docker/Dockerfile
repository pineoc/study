FROM ubuntu
LABEL MAINTAINER="kingsuk92@gmail.com"

RUN apt-get update
RUN apt-get -y install build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y git

RUN git clone https://github.com/pineoc/nodejs-push-test.git
RUN cd nodejs-push-test && npm install

EXPOSE 3000

RUN cd nodejs-push-test && npm start
