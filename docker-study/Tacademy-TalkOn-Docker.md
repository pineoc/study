# Tacademy TalkOn, Docker

- 주제 : (19차)컨테이너 기반 가상화 플랫포 '도커'의 이해
- 일시 : 2017년 1월 17일(수), 13:00~18:00
- 장소 : T아카데미 Hall
- 영상: https://www.youtube.com/channel/UCtV98yyffjUORQRGTuLHomw/featured 에 나올 예정
## 도커 Docker 입문, 컨테이너 기반 가상화 도구 - 김대권

도커는 이미지를 통해서 다양한 환경을 제공

**컨테이너 != Virtual Machine**

- 컨테이너는 하드웨어 가상화가 아님
  - 격리된 환경에서 프로세스를 실행
  - OS에서 지원하는 기능을 사용


- 컨테이너: 하드웨어 가상화 없는 격리된 환경에서 실행되는 **프로세스**
- 이미지: 특정 프로세스를 실행하기 위한 환경
  - 계층화된 파일 시스템
  - 이미지는 파일 파일들의 집합


> 도커에 대한 기본적인 개념을 강의해주셨음.
## 도커 컨테이너 만들기 - 김충섭

컨테이너 명령어: 

- 실행하기 - `run`
- 컨테이너 목록 확인 - `ps`
- 컨테이너 중지 - `stop`
- 컨테이너 제거 - `rm`
- 컨테이너 로그보기 - `logs`
- 이미지 목록 확인 - `images`
- 이미지 다운로드 - `pull`
- 이미지 삭제 - `rmi`
- 네트워크 만들기 - `network`
- 볼륨마운트 - `-v`

실습

    > docker run -d \
    -p 4568:4567 \
    -e ENDPOINT=https://workshop-docker-kr.herokuapp.com \
    -e PARAM_NAME=pineoc \
    subicura/docker-workshop-app:2


![접속한 사람들의 이름을 볼 수 있다!](https://d2mxuefqeaa7sj.cloudfront.net/s_91340C736EA2656E2DBAEB80E7B2FBB279B3624CF684D7C82FA2EC4E6DEAD5EA_1516167674559_+2018-01-17++2.40.57.png)


여기에 메세지를 남기는 컨테이너를 실행해보자.


    > docker run -d -p 4569:4567 \
    -e ENDPOINT=https://workshop-docker-kr.herokuapp.com \
    -e PARAM_NAME=pineoc \
    -e PARAM_MESSAGE=반갑습니다.몇글자까지가능한지테스트해봅니다. \
    subicura/docker-workshop-app:3


![글자가 길어져서 내려갔...](https://d2mxuefqeaa7sj.cloudfront.net/s_91340C736EA2656E2DBAEB80E7B2FBB279B3624CF684D7C82FA2EC4E6DEAD5EA_1516168580257_+2018-01-17++2.56.04.png)


`Redis`를 실행하고 telnet을 이용해 통신도 해보았다.


    > docker run --name=redis -d -p 1234:6379 redis
    > docker run --rm -it mikesplain/telnet docker.for.mac.localhost 1234
    
    set hello world
    +OK
    get hello
    $5
    world
    quit

`mysql` 도 실행해본다.
https://hub.docker.com/_/mysql/ 참고해서 실행해보자.


    > docker run -d -p 3306:3306 \
    -e MYSQL_ALLOW_EMPTY_PASSWORD=true \
    --name mysql \
    mysql:5.7
    
    > docker exec -it mysql mysql
    
    mysql> create database wp CHARACTER SET utf8;
    mysql> grant all privileges on wp.* to wp@'%' identified by 'wp';
    mysql> flush privileges;
    mysql> quit
    

이 DB를 이용해서 WordPress를 띄워볼 것이다.


    docker run -d -p 8080:80 \
      -e WORDPRESS_DB_HOST=docker.for.mac.localhost \
      -e WORDPRESS_DB_NAME=wp \
      -e WORDPRESS_DB_USER=wp \
      -e WORDPRESS_DB_PASSWORD=wp \
      wordpress

`localhost:8080` 에 접속해보면 워드프레스가 뜨는 것을 볼 수 있다!

앞서 설명한 명령어들을 공부해봅니다.
ps, rm, images, logs, pull, rmi ...

`network create` 라는 명령어로 네트워크를 만들 수 있다.
이 명령어 네트워크를 만들고 컨테이너 만들때 네트워크 옵션을 적어두면 IP를 몰라도 이름으로 접속할 수 있다.

`docker-compose` 를 써보자!


    version: '2'
    services:
      db:
        image: mysql:5.7
        volumes:
          - ./mysql:/var/lib/mysql
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: wordpress
          MYSQL_DATABASE: wordpress
          MYSQL_USER: wordpress
          MYSQL_PASSWORD: wordpress
      wordpress:
        image: wordpress:latest
        volumes:
          - ./wp:/var/www/html
        ports:
          - "8000:80"
        restart: always
        environment:
          WORDPRESS_DB_HOST: db:3306
          WORDPRESS_DB_PASSWORD: wordpress
    


    > docker-compose up -d

위의 명령어를 실행하고,
`localhost:8000` 접속하면 워드프레스 설치화면을 볼 수 있다.

## 도커 Docker 입문, 이미지 생성 - 김대권

git을 포함한 ubuntu 컨테이너를 만들어본다.


    > docker run -it ubuntu:16.04 bash
    
    # apt-get update
    # apt-get install -y git
    # git version


    > docker ps
    > docker diff <CONTAINER_ID>
    > docker commit <CONTAINER_ID> ubuntu:git
    > docker run -it ubuntu:git bash
    # git

`docker commit` 에 대한 내용을 찾아보았다.
https://docs.docker.com/engine/reference/commandline/commit/


    docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

OPTIONS

| Name, shorthand | Default | Description                                                                            |
| --------------- | ------- | -------------------------------------------------------------------------------------- |
| --author , -a   |         | Author (e.g., “John Hannibal Smith [hannibal@a-team.com](mailto:hannibal@a-team.com)”) |
| --change , -c   |         | Apply Dockerfile instruction to the created image                                      |
| --message , -m  |         | Commit message                                                                         |
| --pause , -p    | true    | Pause container during commit                                                          |


`docker diff` 는 원래 있던 것과 비교해서 다른 파일 목록을 보여준다.

`Dockerfile`을 이용해서 만들어 본다.


    FROM ubuntu:latest
    
    RUN apt-get update
    RUN apt-get install -y git

그리고 빌드를 해본다. (Dockerfile 이 있는 디렉토리에서 명령 실행)

    > docker build -t ubuntu:git02 .

아래의 명령을 실행해보면 만들어진 결과를 볼 수 있다.

    > docker images | grep git


    ubuntu    git02     0497e41bd732        About a minute ago   254MB
    ubuntu    git       e7d250e6209d        18 minutes ago       241MB

Dockerfile 예시를 보려면, https://github.com/nacyot/docker_tutorial


    > docker build -t pineoc/docker_tutorial

위와 같이 명령어를 실행하고 DockerHub에 올려보는게 목표!


    > docker push pineoc/docker_tutorial


## 도커 이미지 자동 배포 하기 - 김충섭

먼저 젠킨스 컨테이너를 받아준다.

    > docker pull subicura/jenkins:2

GitHub: https://github.com/subicura/docker-jenkins-workshop

도커를 이용해 제품을 배포하는 과정 + CI 서비스 사용

1. 소스 저장소에 외신 소스를 저장
2. ~~전체소스를 다운로드~~
3. ~~테스트~~
4. ~~Docker 이미지 만들기~~
5. ~~Docker 이미지 저장~~
6. ~~애플리케이션 업데이트~~

Jenkins 실행

    docker run -u root --rm -p 8080:8080 --name jenkins \
    -v /Users/pineoc/Downloads/jenkins:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    subicura/jenkins:2

설정 관련한 것은 슬라이드, 동영상보면서 추가적으로 수정해야할 듯하다.

