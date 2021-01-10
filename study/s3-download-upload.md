# S3 Download & Upload 분석

사내에서 사용하는 S3에 파일들을 다운로드, 업로드하는 과정에서 개선할 것이 있는지
개인적으로 리서치를 진행해보았습니다.

## S3는 뭐지?

우선 S3란 무엇인지 살펴보겠습니다.
공식 문서: <https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/Welcome.html>

Amazon Simple Storage Service는 인터넷용 스토리지 서비스입니다. (일종의 파일 서버)
(S3는 **S**imple, **S**torage, **S**ervice 이 3개의 S로 S3 이름이 된 것으로 보입니다.)

소개 문서: https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/Introduction.html

간단하게 말하자면,
S3는 파일들의 저장소로 사용할 수 있고, 데이터 다운로드, 권한, 인터페이스 등을 지원합니다.
(생활코딩 링크: https://opentutorials.org/course/608/3006)

### 주요 특징

- 많은 사용자가 접속을 해도 이를 감당하기 위해서 시스템적인 작업을 하지 않아도 된다.
- 저장할 수 있는 파일 수의 제한이 없다. 
- 최소 1바이트에서 최대 5TB의 데이터를 저장하고 서비스 할 수 있다. 
- 파일에 인증을 붙여서 무단으로 엑세스 하지 못하도록 할 수 있다. 
- HTTP와 BitTorrent 프로토콜을 지원한다.
- REST, SOAP 인터페이스를 제공한다. 
- 데이터를 여러 시설에서 중복으로 저장해 데이터의 손실이 발생할 경우 자동으로 복원한다.
- 버전관리 기능을 통해서 사용자에 의한 실수도 복원이 가능하다.
- 정보의 중요도에 따라서 보호 수준을 차등 할 수 있고, 이에 따라서 비용을 절감 할 수 있다. (RSS)

### 주요 개념

- 버킷(Bucket)
  - 버킷은 Amazon S3에 저장된 객체에 대한 컨테이너입니다. 모든 객체는 어떤 버킷에 포함됩니다.
  - `http://johnsmith.s3.amazonaws.com/photos/puppy.jpg` -> johnsmith가 버킷 명입니다.
- 객체(Object)
  - 객체는 Amazon S3에 저장되는 기본 개체입니다. 객체는 `객체 데이터`와 `메타데이터`로 구성됩니다.
  - 데이터 부분은 Amazon S3에서 볼 수 없습니다. `메타데이터`는 객체를 설명하는 `Key(이름)-Value(값)` 페어의 집합입니다.
  - 객체는 키(이름) 및 버전 ID를 통해 버킷 내에서 고유하게 식별됩니다.
- 키(Key)
  - 키는 버킷 내 객체의 고유한 식별자입니다. 버킷 내 모든 객체는 정확히 하나의 키를 갖습니다.
  - `http://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl`이라는 URL에서 "doc"는 버킷의 이름이고 "2006-03-01/AmazonS3.wsdl"은 키입니다.
- 리전(Region)
  - Amazon S3에서 사용자가 만드는 버킷을 저장할 리전을 선택할 수 있습니다.
  - 지연 시간 최적화, 비용 최소화, 규정 요구 사항 준수 등 다양한 필요에 따라 리전을 선택할 수 있습니다.
- 버전 관리(Versioning)
  - https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/Versioning.html
  - 버전 관리는 동일 버킷 내에 여러 개의 객체 변형을 보유하는 것을 의미합니다.
  - 버전 관리를 사용하면 Amazon S3 버킷에 저장된 모든 버전의 모든 객체를 보존, 검색 및 복원할 수 있습니다.
- 더 자세한 내용은 소개 문서 링크 및 생활코딩 링크에 있으니 참고해주세요.

## S3 Download & Upload

S3 콘솔에서도 업로드, 다운로드를 할 수 있습니다.

- 다운 받기: https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/user-guide/download-objects.html

위 링크처럼 S3 콘솔에서 하는 방법 말고 CLI로 하는 방법도 어렵지는 않습니다.

```sh
# download
$ aws s3 cp s3://test/a.txt ./
# upload
$ aws s3 cp a.txt s3://test
```

## 현재 상황 분석

여기서 더 알아볼 것은 개선이 필요한 점, 개선할 수 있는점을 알아보고자 합니다.

- 현재 우리가 파일을 올리고 받는데 얼마나 걸리는가
- 파일을 올리고 받는데 어떤 방식을 사용하고 있는가
  - 단순히 aws s3 명령어를 사용하고 있는지
  - 프로그램 구현으로 업로드, 다운로드를 하고 있는지
- 개선이 필요한가
- 개선이 가능하다면 얼마나 개선할 수 있는가

### Upload 방식 분석

```sh
$ aws s3 cp x.x.x.x_WindowsNoEditor.zip s3://x/x.x.x.x_WindowsClient.zip --no-progress --profile "" --region ap-northeast-2
$ aws s3 cp x.x.x.x_WindowsNoEditor.zip s3://x/x.x.x.x_WindowsClient.zip --no-progress --profile x-x --region ap-northeast-2
```

단순히 S3에 cp(복사) 명령어로 업로드하고 있습니다.

파일을 업로드 하기 전에 windowsNoEditor 폴더를 .zip 파일로 만들어서 하나의 파일로 업로드하고 있습니다.
압축하기전에 폴더의 용량은 총 26GB 가량되는데, 압축하면 (얼마나 줄어드는지는 확인해봐야함) 입니다.

압축 명령어는 다음과 같고 7-Zip는 9.20 버전(2010.11)을 사용하여 압축합니다.

```sh
$ 7z.exe a x.x.x.x_WindowsNoEditor.zip -r WindowsNoEditor -mx0 -xr!*.pdb
```

- mx0: mx0 옵션은 압축 레벨을 0으로 지정하겠다는 옵션입니다.
  - 0 레벨로 하면 압축이 아닌 copy mode로 진행됩니다. 
- xr!*.pdb: .pdb 파일을 제외(Exclude)하겠다는 옵션입니다.
  - r은 Recurse로 하위 경로까지 적용하는 옵션, !는 와일드카드(wildcard) 옵션으로 사용합니다.
- 옵션 내용: https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm

확인해본 결과 압축하지 않고 파일만 묶어서 한번에 업로드하는 것으로 보입니다.
약 30GB를 묶고 업로드하는데에 걸리는 시간은 8분 정도 걸립니다.

압축하는데에 시간을 사용하여 업로드 속도를 올릴 것인지, 압축하지 않고 올리지만 [multipart로 업로드](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/mpuoverview.html)하여 속도를 올릴 것인지
고민이 필요한 상태긴합니다. 트레이드 오프가 있는 상태네요.

다만 압축하지 않는 이유를 명확히 확인하고 명확한 의도가 없다면 압축을 하여
업로드 다운로드 속도를 빠르게 하는 것이 좋을 것 같기는합니다.
(7z 업데이트를 통해서 압축 속도도 향상 시키는 것이 좋을 것 같습니다.)

```
## 2019.05.13 테스트해볼 내용
- 테스트해볼 폴더 하나 받아본다
- https://www.7-zip.org/download.html 여기서 9.20 / 16.04 / 19.00 실행 파일 다운로드
- 각 바이너리로 압축 옵션 없이 얼마나 걸리는지, 용량은 얼마나 되는지 테스트
- 각 바이너리로 압축 옵션 최소로 두고 얼마나 걸리는지, 용량은 얼마나 되는지 테스트
- (추가 옵션) zstd 설치 및 압축 테스트
```



### Download 방식 분석

현재는 S3에서 데이터를 받기 위해 C#으로 작성된 프로그램으로 데이터를 다운받고 있습니다.

여러개의 쓰레드로 파일을 받고 있으며 10분 내외로 받을 수 있는 상태입니다.
(네트워크 사정에 따라 조금씩 달라지긴 합니다)

