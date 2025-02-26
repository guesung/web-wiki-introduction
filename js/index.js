console.log(
  '%c' +
    ' __      __  ______   __  __   ______     ' +
    '\n' +
    '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
    '\n' +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    '\n' +
    ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
    '\n' +
    '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
    '\n' +
    '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
    '\n' +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  'color: #d81b60; font-size: 16px; font-weight: bold;',
);

const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const resetInput = () => {
  document.querySelector('.comment-input').value = '';
};

submitButton.addEventListener('click', () => {
  const commentInput = document.querySelector('.comment-input');
  if (!commentInput) return;

  const comment = commentInput?.value;

  const commentList = document.querySelector('.comment-list');
  const commentItem = document.createElement('li');
  commentItem.innerHTML = `
              <div class="comment-item">
                <div class="comment-author">
                  <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" width="24px" />
                  <span>방문자</span>
                </div>
                <div class="comment-content">
                  ${comment}
                </div>
              </div>
              `;

  commentList.appendChild(commentItem);

  window.alert('댓글이 등록되었습니다');
  resetInput();
});

cancelButton.addEventListener('click', resetInput);
