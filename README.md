# MarkdownBoard

### 구현기능
- 회원가입
- 로그인
- jwt token 을 이용한 api

---

# UI
### 회원가입
<img width="1792" alt="Screen Shot 2021-08-26 at 6 34 24 PM" src="https://user-images.githubusercontent.com/51353146/130940016-fd3bc2d2-f4af-499a-acc6-ba960b646a14.png">

### 로그인
<img width="1792" alt="Screen Shot 2021-08-26 at 6 34 40 PM" src="https://user-images.githubusercontent.com/51353146/130940070-8d8a55fb-0194-4b76-86ff-2e1c2e7d1988.png">

### 메인페이지
<img width="1792" alt="Screen Shot 2021-08-26 at 6 35 05 PM" src="https://user-images.githubusercontent.com/51353146/130940120-fdf00602-2f41-4ca1-a7a3-df9eafa2f6c5.png">

---

# RUSH 00 - Markdown 기반 게시판 만들기

|                      |                    |
| --------------------:| ------------------ |
|   제출할 폴더 이름 :     |  제한 없음           |
|   제출할 파일 이름 :     |  제한 없음           |
|   사용 가능한 외부 모듈 : |  제한 없음           |
|   참고사항 :           |  없음               |

### 조건

- API 문서를 작성하여 협업을 진행하여야 한다.
- UX/UI를 신경써서 만들어야 함. 상태관리를 통해 잘못된 Components가 보여서는 안된다.

### 기본 구현 사항

- 메인페이지에서는 네비게이션을 통해서 아래 페이지로 이동이 가능하다.
  - 로그인
  - 프로파일
  - 게시글
- 데이터를 가져오는 동안에는 가져오는 중임을 사용자가 알 수 있어야한다.
  - 스피너, 스켈레톤
- 모든 오류/경고/처리에 대해서는 안내 문구로 해당 상태를 인식할 수 있어야한다. 

#### 게시글
- 게시글은 markdown를 html로 렌더링 하여 보여주어야 한다.
- markdown editor를 이용해서 게시글을 생성/편집할 수 있다.
  - DB에는 markdown 문법의 text가 저장되어야 한다.
- 댓글을 생성/편집할 수 있다.
- 페이지네이션, 무한스크롤링 중 하나를 선택하여 구현한다.

> ℹ️
> react-simplemde-editor: https://github.com/RIP21/react-simplemde-editor
> tui.editor: https://github.com/nhn/tui.editor

#### 로그인 

- 로그인/회원 가입 페이지가 있어야한다.
- 로그인을 하지 않으면 다른 페이지에 접근 할 수 없다.
- 해당 유저권한에 따른 권한 분리가 Frontend와 Backend에서 모두 검증이 되어야한다.
- 로그인은 새로고침 / 네비게이션을 이용해도 유지가 되어야한다.
- jwt token를 이용하여 구현한다.
  - jwt token payload안에는 필요한 부분만 포함시킨다.
  - jwt token과 cookie의 만료시간은 같아야 한다.
  - 만료시간 지나면 새로운 jwt token을 발급한다.

#### 배포

- Frontend와 Backend를 아래와같이 각각 포트를 설정한다.
  - React: 4200 포트
  - Express: 4242 포트 
- 제출된 파일 안에는 .env_example이 있어야한다.
 - 주요한 정보(PORT, API ENDPOINT, SECRET KEY)들은 환경변수를 통해 관리한다.

### 보너스 

- 모든 것은 `docker-compose up –build` 한 명령어로 실행 될 수 있다.
- Heroku 또는 클라우드 서비스를 이용해서 배포한다.
- 목록으로 구현될 수 있는 사항들은 모두 페이지네이션, 무한스크롤링 중 하나로 구현되어야 한다.
- 관리자 페이지가 별도로 존재 해야 하며 해당 페이지 내부에서는 기본 구현 사항에 있는 관리자 기능을 손쉽게 사용 할 수 있어야 한다.
  - 다른 유저들을 블락 시킬 수 있다.
  - 게시글/댓글을 삭제할 수 있다. 
