function init() {
    const elements = {
      agreeBtn: document.getElementById('agree-btn'),
      declineBtn: document.getElementById('decline-btn'),
      resetBtn: document.getElementById('reset-btn'),
      contentWrapper: document.getElementById('content-wrapper'),
      prompt: document.getElementById('prompt'),
      headerButtons: document.getElementById('header-buttons'),
      signedText: document.getElementById('signed-text'),
      postSignButtons: document.getElementById('post-sign-buttons'),
      actualContent: document.querySelector('.actual-content')
    };
    console.log('页面元素检查:');
    for (const [key, value] of Object.entries(elements)) {
      console.log(`- ${key}:`, value);
    }
    const showSignedState = () => {
      elements.contentWrapper.classList.remove('blurred');
      elements.prompt.style.display = 'none';
      elements.headerButtons.style.display = 'none';
      elements.signedText.style.display = 'block';
      elements.postSignButtons.style.display = 'flex';
      elements.actualContent.style.display = 'block';

      console.log('已切换到签署后状态');
    };

    const resetToInitialState = () => {
      elements.contentWrapper.style.display = 'block';
      elements.contentWrapper.classList.add('blurred');
      elements.prompt.style.display = 'block';
      elements.headerButtons.style.display = 'flex';
      elements.signedText.style.display = 'none';
      elements.postSignButtons.style.display = 'none';
      elements.actualContent.style.display = 'block';
      if (window.location.search.includes('from=image')) {
        window.history.replaceState({}, '', window.location.pathname);
      }

      console.log('已重置为初始状态');
    };
    try {

      elements.agreeBtn.addEventListener('click', () => {
        console.log('同意按钮被点击，跳转到image-page.html');
        window.location.href = 'image-page.html';
      });


      elements.declineBtn.addEventListener('click', () => {
        console.log('拒绝按钮被点击，跳转到meme.html');
        window.location.href = 'meme.html';
      });


      elements.resetBtn.addEventListener('click', () => {
        console.log('重新选择按钮被点击');
        resetToInitialState();
      });

      console.log('所有按钮事件绑定成功');
    } catch (error) {
      console.error('事件绑定失败:', error);
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('from') === 'image') {
      showSignedState();
    } else {
      resetToInitialState();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

