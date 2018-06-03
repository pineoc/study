# Slack GitHub Webhook

슬랙에 깃헙에서 활동한 내용들을 알려줄 웹훅을 등록해봅니다.

## 가이드

슬랙 Help: https://get.slack.help/hc/en-us/articles/232289568-Use-GitHub-with-Slack

저는 슬랙에서 `unauthed mode`로 진행했습니다. [링크](https://get.slack.help/hc/en-us/articles/232289568-Use-GitHub-with-Slack#switch-to-unauthed-mode)

1. 알림을 받고자하는 저장소에 갑니다.
2. Settings 탭 > Webhooks 로 이동합니다.
3. add Webhook 버튼을 누르고 진입합니다.
4. 슬랙에서 받은 webhook url을 입력합니다.
5. Content type은 `application/json`으로 선택해줍니다.
6. Add webhook을 눌러서 웹훅 등록을 완료합니다.

위와 같이 등록해서 성공적으로 웹훅을 받아볼 수 있었습니다.
