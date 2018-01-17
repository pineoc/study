FROM ubuntu
MAINTAINER kingsuk92@gmail.com

RUN apt-get update
RUN apt-get -y install build-essential
RUN curl -sL https://deb.nodesource.com/setup | bash - && \
    apt-get install -y nodejs \
		apt-get install -y git

RUN git clone https://github.com/pineoc/nodejs-push-test.git
RUN cd nodejs-push-test && npm install

EXPOSE 3000

RUN npm start

